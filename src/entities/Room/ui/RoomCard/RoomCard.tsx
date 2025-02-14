import { memo, useState } from 'react';
import { Room } from '../../model/types/room';
import placeholder from "/src/shared/assets/placeholder.png";
import { numberWithSpaces } from '../../../../shared/lib/numberWithSpaces/numberWithSpaces';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import { countIntersections } from '../../../../shared/lib/countIntersections/countIntersections';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../../../pages/MainPage/model/slices/roomSlice';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

interface RoomCardProps {
    className?: string;
    room: Room;
}

export const RoomCard = memo(({ room }: RoomCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const dispatch = useDispatch();
    const rooms = useSelector((state: StateSchema) => state.room.rooms);

    const onOpen = () => setIsModalOpen(true);
    const onClose = () => setIsModalOpen(false);

    const onBooking = () => {
        if(!countIntersections(room.dates, {startDate: dateFrom, endDate: dateTo })){
            dispatch(roomActions.setRooms(
                rooms.map(r => r.id === room.id ? { ...r, dates: [...room.dates, {startDate: dateFrom, endDate: dateTo }] } : r)
            ))
            alert(`Вы успешно забронировали номер на даты: ${dateFrom} - ${dateTo}`)
            setIsModalOpen(false)
        }else{
            alert(`У нас нет свободных номеров в этом варианте размещения ${dateFrom} - ${dateTo}`)
        }
    }

    return (
        <div className="roomCard">
            <img src={placeholder} alt="" />
            <div className='roomCardContent'>
                <h4>{room.name}</h4>
                <div className='items'>
                    <div>Кол-во спален: <span>{room.bedrooms}</span></div>
                    <div>С видом на: <span>{room.view}</span></div>
                </div>
                <div className='price'>{numberWithSpaces(room.price)} тг</div>
                <button className='button' onClick={onOpen}>Забронировать</button>
            </div>
            <Modal isOpen={isModalOpen} lazy onClose={onClose}>
                <div className='flex'>
                    <h2>Выберите даты</h2>
                    <label className='label'>
                        Дата от
                        <input type='date' className='input' value={dateFrom} onChange={e => setDateFrom(e.target.value)}/>
                    </label>
                    <label className='label'>
                        Дата до
                        <input type='date' className='input' value={dateTo} onChange={e => setDateTo(e.target.value)}/>
                    </label>
                    <button className='button' onClick={onBooking}>Забронировать</button>
                </div>
            </Modal>
        </div>
    );
});