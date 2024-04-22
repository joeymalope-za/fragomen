"use client";
import React from "react";
import { cn } from "../utils/cn";
import { formatDate } from "../utils/helper";

interface SelectProps {
  label: string;
  className: string;
  value: Date;
  onChange: (value: string) => void;
}

export default function DatePicker({
  label,
  className,
  value,
  onChange,
}: SelectProps): JSX.Element {
  return (
    <div className={cn("flex gap-4 flex-col dark", className)}>
      <label className="color-white font-[600]">{label}</label>
      <input
        value={formatDate(value)}
        onChange={(e) => onChange(e.target.value)}
        type="date"
        className="bg-transparent border-solid border-[1px] h-[50px] box-border border-[#8C94A8] p-2 pr-4 rounded-lg text-[14px] focus:border-[#14BDF3]"
      />
    </div>
  );
}
