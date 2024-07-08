"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  // {
  //   from: new Date("05-01-2024"),
  //   to: new Date("09-17-2024"),
  //   middayCheckout: true,
  // },
];

type CalendarProps = {
  Accommodation_name: string;
};

function AvailabilityCalendar({ Accommodation_name }: CalendarProps) {
  return (
    <>
      <Calendar bookings={bookings} Accommodation_name={Accommodation_name} />
    </>
  );
}

export default AvailabilityCalendar;
