import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room, RoomsPageSchema, RoomView } from "../../../../entities/Room/model/types/room";


function formateDate(value : number) : string{
    const today = new Date();
    const tenDaysLater = new Date();
    tenDaysLater.setDate(today.getDate() + value);

    return value ? tenDaysLater.toISOString().split("T")[0] : today.toISOString().split("T")[0]
} 

const initialState: RoomsPageSchema = {
    isLoading: false,
    error: undefined,
    sortBy: 'name',
    rooms: [
        { id: "1", name: "Комфортный номер", bedrooms: 1, price: 50000, view: RoomView.CITY, dates: []},
        { id: "2", name: "Люкс с видом на море", bedrooms: 2, price: 8000, view: RoomView.SEA, dates: [] },
        { id: "3", name: "Семейный номер", bedrooms: 3, price: 12000, view: RoomView.MOUNTAIN, dates: []},
        { id: "4", name: "Уютный номер с садом", bedrooms: 1, price: 6000, view: RoomView.GARDEN, dates: [{startDate: "2025-03-10", endDate: "2025-03-20" }]},
        { id: "5", name: "Речной номер", bedrooms: 2, price: 9000, view: RoomView.RIVER, dates: [{startDate: "2025-03-14", endDate: "2025-03-29" }]},
        { id: "6", name: "Панорамный люкс", bedrooms: 3, price: 1100, view: RoomView.CITY, dates: []},
        { id: "7", name: "Одноместный с видом на море", bedrooms: 1, price: 5050, view: RoomView.SEA, dates: []},
        { id: "8", name: "Горный ретрит", bedrooms: 2, price: 8500, view: RoomView.MOUNTAIN, dates: []},
        { id: "9", name: "Просторный садовый люкс", bedrooms: 3, price: 13000, view: RoomView.GARDEN, dates: []},
        { id: "10", name: "Эконом с видом на реку", bedrooms: 1, price: 45000, view: RoomView.RIVER, dates: [{startDate: "2025-03-12", endDate: "2025-03-19" }]}
    ],
    minPrice: 0,
    bedrooms: 0,
    view: "",
    dateFrom: formateDate(0),
    dateTo: formateDate(10)

};

const roomSlice = createSlice({
    name: "roomSlice",
    initialState,
    reducers: {
        setMinPrice: (state, action: PayloadAction<number>) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action: PayloadAction<number>) => {
            state.maxPrice = action.payload;
        },
        setBedrooms: (state, action: PayloadAction<number>) => {
            state.bedrooms = action.payload;
        },
        setView: (state, action: PayloadAction<string>) => {
            state.view = action.payload;
        },
        setDateFrom: (state, action: PayloadAction<string>) => {
            state.dateFrom = action.payload;
        },
        setDateTo: (state, action: PayloadAction<string>) => {
            state.dateTo = action.payload;
        },
        setRooms: (state, action: PayloadAction<Room[]>) => {
            state.rooms = action.payload
        }
    },
});

export const { actions: roomActions } = roomSlice;
export const { reducer: roomReducer } = roomSlice;