import { useState, useEffect } from "react";
import { IBooking } from "@/components/AvailabilityCalendar/AvailabilityCalendar";

export const useBookings = (initialBookings: IBooking[] = []) => {
  const [bookings, setBookings] = useState<IBooking[]>(initialBookings);

  useEffect(() => {
    setBookings(initialBookings);
  }, [initialBookings]);

  return {
    bookings,
    setBookings,
  };
};
