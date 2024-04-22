"use client";
import React from "react";
import DatePicker from "./DatePicker";

interface DateRangePickerProps {
  value: {
    arrivalDate: Date;
    departureDate: Date;
  };
  onChange: (value: { arrivalDate: Date; departureDate: Date }) => void;
}

export default function DateRangePicker({
  value,
  onChange,
}: DateRangePickerProps): JSX.Element {
  return (
    <div className="flex gap-4">
      <DatePicker
        label="Arrival"
        className="flex-1"
        value={value.arrivalDate}
        onChange={(newDate) =>
          onChange({ ...value, arrivalDate: new Date(newDate) })
        }
      />
      <DatePicker
        label="Departure"
        className="flex-1"
        value={value.departureDate}
        onChange={(newDate) =>
          onChange({ ...value, departureDate: new Date(newDate) })
        }
      />
    </div>
  );
}
