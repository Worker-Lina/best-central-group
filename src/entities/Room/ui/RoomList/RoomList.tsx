import { memo } from 'react';
import { RoomCard } from '../RoomCard/RoomCard';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';
import { countIntersections } from '../../../../shared/lib/countIntersections/countIntersections';


export const RoomList = memo(() => {
    const rooms = useSelector((state: StateSchema) => state.room.rooms);
    const {view, bedrooms, maxPrice, minPrice, dateFrom, dateTo} = useSelector((state: StateSchema) => state.room);

    const filteredRooms = rooms.filter((room) => {
        const validMinPrice = minPrice ?? 0;

        const isDateValid = (!dateFrom || !dateTo) || !countIntersections(room.dates, { startDate: dateFrom, endDate: dateTo });

        return (
            isDateValid &&
            room.price >= validMinPrice &&
            (!maxPrice || room.price <= maxPrice) &&
            (!bedrooms || room.bedrooms === bedrooms) && 
            (!view || room.view === view)
        );
    });

    return (
        <div className={'roomList'}>
            {filteredRooms.map((room) =>
                <RoomCard 
                    key={room.id}
                    room={room}
                />
            )}
        </div>
    );
});