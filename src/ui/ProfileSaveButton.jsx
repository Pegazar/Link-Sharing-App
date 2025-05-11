import React from "react";
import { toast } from "react-toastify";
import { ExclamationIcon, IconChangesSaved } from "../assets/svg/svgicons";

const ProfileSaveButton = ({ saveProfile, onValidate }) => {
  const handleSave = () => {
    if (onValidate && !onValidate()) {
      toast.error("Please fill in all fields correctly.", {
        icon: <ExclamationIcon className="w-4 h-4 text-white" />,
        position: "bottom-center",
        style: {
          background: "#FF4D4D",
          color: "#fff",
          fontWeight: "500",
        },
      });
      return;
    }
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
    <div className="fixed xl:absolute bottom-0 left-0 right-0 bg-white w-full rounded-b-xl">
      <div className="border-t border-gray-200 py-6 xl:py-4 px-6 xl:px-8 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-[#633CFF] w-full sm:w-auto text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#4520CE] active:scale-95 active:bg-[#3D1EB8] transition duration-150 ease-in-out"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileSaveButton;
