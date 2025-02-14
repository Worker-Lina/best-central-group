import { RoomDate } from "../../../entities/Room/model/types/room";

export function countIntersections(bookings: RoomDate[], newBooking: RoomDate): number {
    const newStart = new Date(newBooking.startDate).getTime();
    const newEnd = new Date(newBooking.endDate).getTime();

    return bookings.filter(item => {
        const start = new Date(item.startDate).getTime();
        const end = new Date(item.endDate).getTime();

        return !(newEnd <= start || newStart >= end);
    }).length;
}
