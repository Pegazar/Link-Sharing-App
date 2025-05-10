import React, { useState, useEffect } from "react";

const FormField = ({
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (type === "email") {
      if (!value) {
        setError("");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError(emailRegex.test(value) ? "" : "Invalid email format");
      }
    }
  }, [value, type]);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
      <label className="block text-sm font-medium text-[#757575] w-1/3">
        {label}
        {required && <span className="text-[#757575]">*</span>}
      </label>
      <div className="w-full lg:w-2/3">
        <div className="flex items-center gap-4 relative">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`flex-1 py-2 px-3 border rounded-lg focus:outline-none ${error ? "border-red-500 focus:ring-transparent" : "border-gray-300 focus:border-[#633CFF]"
              }`}
          />
          {error && <p className="absolute right-0 -bottom-5 text-right text-xs font-medium text-red-500 whitespace-nowrap">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default FormField;
