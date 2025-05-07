import React from "react";
import { toast } from "react-toastify";
import { IconChangesSaved } from "../assets/svg/svgicons";

const ProfileSaveButton = ({ saveProfile }) => {
  const handleSave = () => {
    saveProfile();
    toast.success("Your changes have been successfully saved!", {
      position: "bottom-center",
      icon: <IconChangesSaved className="w-4 h-4 text-white" />,
      style: {
        background: "#2C2C2C",
        color: "#fff",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: "500",
        padding: "12px 20px",
        width: "375px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      },
    });
  };

  return (
    <div className="border-t border-gray-200 pt-4 pb-4 px-8 flex justify-end">
      <button
        onClick={handleSave}
        className="bg-[#633CFF] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer hover:bg-[#4520CE] transition-colors"
      >
        Save
      </button>
    </div>
  );
};

export default ProfileSaveButton;
