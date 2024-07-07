import React from "react";

const Pill = ({ option, onDelete }) => {
  return (
    <div className="rounded-full px-2 py-1 bg-gray-100 flex  justify-between items-center text-xs">
      <span>{option.label}</span>
      <button className="ml-1" onClick={() => onDelete(option)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pill;
