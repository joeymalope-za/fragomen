"use client";
import React, { useState } from "react";
import SideNavItem from "./sideNavItem";
import SideNavPopup from "../features/SideNavModal";
import { cn } from "../utils/cn";
import { IconType } from "../type";

interface SideNavProps {
  className?: string;
}

export default function SideNav({ className }: SideNavProps): JSX.Element {
  const [enableModal, setEnableModal] = useState(true);
  const menuItems = [
    {
      icon: IconType.home,
      enableModal: true,
    },
    {
      icon: IconType.newOrder,
      enableModal: false,
    },
    {
      icon: IconType.quickCheck,
      enableModal: false,
    },
    {
      icon: IconType.appTracker,
      enableModal: true,
    },
    {
      icon: IconType.myDocs,
      enableModal: false,
    },
    {
      icon: IconType.myProfile,
      enableModal: false,
    },
    {
      icon: IconType.more,
      enableModal: false,
    },
  ];

  return (
    <div className={cn(className, "flex h-[calc(100vh-4rem)] absolute")}>
      <div className="w-16 h-full p-0 flex flex-col items-center box-border bg-nightBlue">
        {menuItems.map((menuItem) => (
          <SideNavItem
            key={menuItem.icon}
            icon={menuItem.icon}
            onClick={() => {
              menuItem.enableModal && setEnableModal(!enableModal);
            }}
          />
        ))}
      </div>
      {enableModal}
      {enableModal ? (
        <div className="h-[893px] py-4 p-8 box-border">
          <SideNavPopup />
        </div>
      ) : null}
    </div>
  );
}
