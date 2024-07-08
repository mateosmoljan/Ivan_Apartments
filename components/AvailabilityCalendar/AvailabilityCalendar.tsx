"use client";

import { useEffect, useState } from "react";
import Calendar from "./index";
import "./style.css";

export interface IBooking {
  from: Date;
  to: Date;
  middayCheckout: boolean;
}

type CalendarProps = {
  Accommodation_name: string;
  bookings: IBooking[];
};

const [Bookings, setBookings] = useState<IBooking[]>([]);

export const bookings = Bookings;

function AvailabilityCalendar({ Accommodation_name, bookings }: CalendarProps) {
  useEffect(() => setBookings(bookings), []);
  return (
    <>
      <Calendar bookings={bookings} Accommodation_name={Accommodation_name} />
    </>
  );
}

export default AvailabilityCalendar;
