import React from "react";
import Image from "next/image";

export default function Avatar(): JSX.Element {
  return (
    <div className="">
      <Image
        src={"/christina.png"}
        alt="User avatar"
        width="30"
        height="30"
        className="rounded-full"
      />
    </div>
  );
}
