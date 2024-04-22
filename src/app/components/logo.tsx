import React from "react";
import { Icons } from "./icons";

export default function Logo(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <Icons.logo />
      <p className="font-[700] text-[12px] text-center">Nomadic Travel</p>
    </div>
  );
}
