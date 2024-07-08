"use client";
import { useEffect, useState } from "react";
import Calendar from "./index";
import "./style.css";
import { useBookings } from "@/Hooks/bookings_hook";

export interface IBooking {
  from: Date;
  to: Date;
  middayCheckout: boolean;
}

type CalendarProps = {
  Accommodation_name: string;
  bookings: IBooking[];
};

function AvailabilityCalendar({ Accommodation_name, bookings }: CalendarProps) {
  const { bookings: Bookings, setBookings } = useBookings(bookings);

  useEffect(() => {
    setBookings(bookings);
  }, [bookings, setBookings]);

  return (
    <>
      <Calendar bookings={Bookings} Accommodation_name={Accommodation_name} />
    </>
  );
}

export default AvailabilityCalendar;
