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

function AvailabilityCalendar() {
  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}

export default AvailabilityCalendar;
