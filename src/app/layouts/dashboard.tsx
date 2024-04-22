import React from "react";
import NavBar from "../components/navbar";
import SideNav from "../components/sidenav";

export default function Dashboard():JSX.Element{
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <NavBar className="flex-1" />
      <main className="h-auto flex-1">
        <SideNav className={"h-auto"} />
        <div className="w-auto h-full bg-[url(/worldmap.svg)] bg-center bg-[length:70vw_70vh] bg-no-repeat"></div>
      </main>
    </div>
  );
}
