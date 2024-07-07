import PropTypes from "prop-types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Pill from "./Pill";

const Dropdown = ({
  options = [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2 with icon",
      value: "option2",
    },
    {
      label: "Long Option 3",
      value: "option3",
    },
    {
      label: "Long Long Option 4",
      value: "option4",
    },
    {
      label: "Long Long Long Option 5",
      value: "option5",
    },
    {
      label: "Long Long Long Long Option 6",
      value: "option6",
    },
    {
      label: "Long Long Long Long Long Option 7",
      value: "option7",
    },
    {
      label: "Long Long Long Long Long Long Option 8",
      value: "option8",
    },
  ],
  isMultiple = false,
  label = "Label",
  usePortal = false,
  enableSearch = true,
  outlined = true,
  id = "",
  order = "asc",
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const sortOptions = useMemo(() => {
    const sorted = options?.sort((a, b) => {
      if (order === "asc") {
        return a.label.localeCompare(b.label);
      } else {
        return b.label.localeCompare(a.label);
      }
    });

    return sorted?.map((o) => {
      if (searchTerm.length < 1) {
        return {
          value: o.value,
          label: o.label,
        };
      }
      const regex = new RegExp(`(${searchTerm})`, "gi");
      return {
        value: o.value,
        label: o.label.split(regex).map((part, i) =>
          regex.test(part) ? (
            <span className="bg-teal-200" key={i}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        ),
      };
    });
  }, [options, order, searchTerm]);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const handleDeleteOption = (option) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const handleOptionSelect = (optionValue) => {
    const selectedOption = options.find(
      (option) => option.value === optionValue
    );
    if (isMultiple) {
      if (!selectedOptions.includes(selectedOption)) {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    } else {
      setSelectedOptions([selectedOption]);
      setIsVisible(false);
    }
  };

  const handleInputFocus = () => {
    setSearchTerm("");
    setIsVisible(true);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdown = (
    <div id={id} className="flex flex-col lg:flex-row lg:items-center">
      <div className="w-full lg:w-2/12">{label}</div>
      <div ref={containerRef} className="relative w-full lg:w-10/12">
        <div
          onClick={() => handleInputFocus()}
          className={`${outlined ? "border bg-white" : "border-none bg-gray-50"} border px-2 min-h-[40px] p-2 w-full rounded flex justify-between items-center cursor-pointer`}
        >
          <div className="flex flex-wrap items-center gap-2">
            {selectedOptions?.map((option) => (
              <Pill
                key={option.value}
                option={option}
                onDelete={handleDeleteOption}
              />
            ))}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div
          className={`absolute z-[9999] w-full mt-2 bg-white shadow-lg border ${isVisible ? "" : "hidden"}`}
        >
          {enableSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={inputRef}
                className={`w-full pl-10 pr-4 h-[40px] border-b focus:outline-none focus:ring-0 focus:none`}
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              {searchTerm.length > 0 && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button onClick={() => setSearchTerm("")} type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {sortOptions?.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-teal-50"
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (usePortal) {
    return ReactDOM.createPortal(
      dropdown,
      document.getElementById("popup-root")
    );
  }

  return dropdown;
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  isMultiple: PropTypes.bool,
  usePortal: PropTypes.bool,
  enableSearch: PropTypes.bool,
  outlined: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  order: PropTypes.string,
};

export default Dropdown;
