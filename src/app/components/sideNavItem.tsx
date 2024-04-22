"use client";
import React, { useState, useEffect } from "react";
import { Icons } from "./icons";
import { cn } from "../utils/cn";
import { IconType } from "../type";

interface sideNavItemProps {
  icon: IconType;
  children?: React.ReactNode;
  onClick?: () => void;
}

const getIcon = (icon: IconType, activeState: boolean): JSX.Element => {

  /* Would be ideal an solution
  const IconToRender = Icons[icon]

    return (
      <IconToRender
        className={cn(activeState ? "fill-[#374C5E]" : "fill-white", "w-4 h-4")}
      />
    );
  */
  switch (icon) {
    case IconType.home: {
      return (
        <Icons.home
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-4 h-4",
          )}
        />
      );
    }
    case IconType.newOrder: {
      return (
        <Icons.newOrder
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-4 h-4",
          )}
        />
      );
    }
    case IconType.quickCheck: {
      return (
        <Icons.quickCheck
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-4 h-4",
          )}
        />
      );
    }
    case IconType.appTracker: {
      return (
        <Icons.appTracker
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-6 h-6",
          )}
        />
      );
    }
    case IconType.myDocs: {
      return (
        <Icons.myDocs
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-6 h-6",
          )}
        />
      );
    }
    case IconType.myProfile: {
      return (
        <Icons.myProfile
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-6 h-6",
          )}
        />
      );
    }
    case IconType.more: {
      return (
        <Icons.more
          className={cn(
            activeState ? "fill-[#374C5E]" : "fill-white",
            "w-6 h-6",
          )}
        />
      );
    }
    default: {
      return <></>;
    }
  }
};

export default function SideNavItem({ icon, onClick }: sideNavItemProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {}, []);

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => onClick?.()}
      className={cn(
        active ? "bg-[rgba(255,255,255,0.8)]" : "",
        "h-16 w-16 flex flex-col justify-center items-center box-border hover:bg-[rgba(255,255,255,0.8)]",
      )}
    >
      {getIcon(icon, active)}
    </div>
  );
}
