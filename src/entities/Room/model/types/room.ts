
export enum RoomView {
    SEA = 'Море',
    CITY = 'Город',
    GARDEN = 'Сад',
    RIVER = 'Река',
    MOUNTAIN = 'Горы'
}

export interface RoomDate {
    startDate: string;
    endDate: string;
}

export interface Room{
    id: string;
    name: string;
    price: number;
    bedrooms: number;
    view: RoomView;
    dates: RoomDate[];
}

export interface RoomsPageSchema {
    rooms: Room[];
    isLoading?: boolean;
    error?: string;
    sortBy: string;
    minPrice: number;
    maxPrice?: number;
    bedrooms: number;
    view: string;
    dateFrom: string;
    dateTo:string;
}
