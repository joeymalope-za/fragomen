"use client";
import React, { useEffect, useState } from "react";

interface SelectProps {
  label: string;
  dataSource: Array<string>;
  value: string;
  onChange: (value: string) => void;
}

export default function Select({
  label,
  dataSource,
  value,
  onChange,
}: SelectProps): JSX.Element {
  return (
    <div className="flex gap-4 flex-col dark">
      <label className="color-[#fff] font-[600]">{label}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="bg-transparent dark:text-white border-solid border-[1px] h-[50px] box-border border-[#8C94A8] p-2 pr-4 rounded-lg text-[14px] focus:border-[#14BDF3] active:appearance-none"
      >
        {dataSource.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
