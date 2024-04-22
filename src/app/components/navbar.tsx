import React from "react";
import Avatar from "./avatar";
import Logo from "./logo";
import { cn } from "../utils/cn";

interface navBarProps {
  className: string;
}

export default function NavBar({ className }: navBarProps): JSX.Element {
  return (
    <nav
      className={cn(
        className,
        "max-h-16 h-16 w-screen py-4 p-8 flex justify-between items-center box-border bg-[#374C5E] align-center",
      )}
    >
      <Logo />
      <Avatar />
    </nav>
  );
}
