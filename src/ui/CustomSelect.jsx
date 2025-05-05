import { useState } from "react";
import React from "react";
import { LinkIcon } from "../assets/svg/svgicons";

const CustomSelect = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.id === value);

  return (
    <div className="relative w-full">
      <div
        className="py-2 px-3 border border-gray-300 rounded-lg bg-white cursor-pointer flex items-center justify-between duration-200 hover:border-[#633CFF]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {selected?.Icon ? (
            <selected.Icon className="w-4 h-4" />
          ) : (
            <LinkIcon className="w-4 h-4" />
          )}
          <span className="font-medium">
            {selected?.name || "Select a platform"}
          </span>
        </div>
        <svg
          className="w-4 h-4 text-[#633CFF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {open && (
        <ul
          className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 outline-0 shadow z-50 rounded-lg max-h-60 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {options.map((option) => {
            const PlatformIcon = option.Icon;
            return (
              <li
                key={option.id}
                className="flex items-center gap-2 px-3 py-2 group cursor-pointer border-b border-gray-300 hover:bg-gray-50"
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
              >
                {PlatformIcon && (
                  <PlatformIcon className="w-4 h-4 duration-200 group-hover:text-[#633CFF]" />
                )}
                <span className="duration-200 group-hover:text-[#633CFF]">
                  {option.name}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
