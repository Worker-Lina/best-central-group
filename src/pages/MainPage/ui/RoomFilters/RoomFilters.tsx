import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';
import { roomActions } from '../../model/slices/roomSlice';


export const RoomFilters = memo(() => {
    const dispatch = useDispatch();
    const {minPrice, maxPrice, bedrooms, view, dateFrom, dateTo} = useSelector((state: StateSchema) => state.room);

    return (
        <div className="filters">
            <label className="label">
                Дата от
                <input 
                    type='date' 
                    className="input"
                    value={dateFrom}
                    onChange={(e) => dispatch(roomActions.setDateFrom(e.target.value))}
                />
            </label>
            <label className="label">
                Дата до
                <input 
                    type='date' 
                    className="input"
                    value={dateTo}
                    onChange={(e) => dispatch(roomActions.setDateTo(e.target.value))}
                />
            </label>
            <label className="label">
                Цена
                <div className="labelItems">
                    <input
                        type="number"
                        className="input priceInput"
                        placeholder="Цена от"
                        value={minPrice}
                        onChange={(e) => dispatch(roomActions.setMinPrice(Number(e.target.value) || 0))}
                    />
                    <input
                        type="number"
                        className="input priceInput"
                        placeholder="Цена до"
                        value={maxPrice}
                        onChange={(e) => dispatch(roomActions.setMaxPrice(Number(e.target.value)))}
                    />
                </div>
            </label>
            <label className="label">
                Количество спален
                <input
                    className="input"
                    type="number"
                    placeholder="Количество спален"
                    value={bedrooms}
                    onChange={(e) => dispatch(roomActions.setBedrooms(Number(e.target.value) || 0))}
                />
            </label>
            <label className="label">
                С видом на
                <select
                    className="select"
                    value={view}
                    onChange={(e) => dispatch(roomActions.setView(e.target.value))}
                >
                    <option value="">Все</option>
                    <option value="Город">Город</option>
                    <option value="Море">Море</option>
                    <option value="Горы">Горы</option>
                    <option value="Сад">Сад</option>
                    <option value="Река">Река</option>
                </select>
            </label>
        </div>
    );
});