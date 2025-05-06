import React from "react";

const FormField = ({ label, type = "text", required = false, placeholder, value, onChange }) => (
  <div className="flex items-center gap-2">
    <label className="block text-sm font-medium text-[#757575] w-1/3">
      {label}
      {required && <span className="text-[#757575]">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-2/3 py-2 px-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#633CFF]"
    />
  </div>
);

export default FormField;
