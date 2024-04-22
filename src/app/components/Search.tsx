"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "./icons";
import { cn } from "../utils/cn";

interface SelectProps {
  label: string;
  dataSource: Array<string>;
}

export default function Search({
  label,
  dataSource,
}: SelectProps): JSX.Element {
  const [searchParamater, setSearchParameter] = useState("");
  const [source, setSource] = useState<Array<string>>([]);
  const [results, setResults] = useState<Array<string>>([]);
  const [tmp, setTmp] = useState<Array<string>>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (source.length)
      setTmp(
        source.filter((el) =>
          el.toLowerCase().startsWith(searchParamater.toLowerCase()),
        ),
      );
    else {
      setSource(dataSource);
    }
  }, [searchParamater, source, dataSource]);
  console.table(results);
  return (
    <div className="flex gap-4 flex-col min-h-32">
      <label className="color-[#fff] font-[600]">{label}</label>
      <div
        className="border-[1px] cursor-pointer border-[#8C94A8] rounded-full flex gap-2 justify-center items-center"
        onBlur={() => setIsActive(true)}
        onMouseOut={() => setIsActive(false)}
      >
        <input
          onChange={(e) => setSearchParameter(e.target.value)}
          className={cn(
            isActive ? "border-[1px] border-[#14BDF3]" : "",
            "bg-transparent h-[50px] p-2 pr-4 text-[14px] w-[80%] focus:border-none focus-within:border-none target:border-none active:border-none active:appearance-none blur:appearance-none outline-none hover:border-none blur:border-none",
          )}
          type="search"
        />
        <Icons.search />
      </div>
      {searchParamater.length !== 0 && (
        <div className="bg-[#1A2632] py-4 px-8 gap-2">
          <span className="color-[#C5E8FF] font-[500] text-base">
            Filter label
          </span>
          {tmp.map((el, i) => (
            <div key={i}>
              <input
                checked={results.includes(el)}
                type="checkBox"
                className="border-solid border-[#14BDF3] border-[1px] mr-2"
                onChange={(e) => {
                  e.currentTarget.checked
                    ? setResults((res) => [...res, el])
                    : setResults((res) => [
                        ...res.filter((d: string) => d != el),
                      ]);
                }}
              />
              <span className="text-[#14BDF3]">{searchParamater}</span>
              <span>{el.slice(searchParamater.length)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
