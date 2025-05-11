import React from "react";
import { toast } from "react-toastify";
import { ExclamationIcon, IconChangesSaved } from "../assets/svg/svgicons";

const LinkSaveButton = ({
  links,
  saveLinks,
  isValidURL,
  doesURLMatchPlatform,
}) => {
  const handleSave = () => {
    saveLinks();
    const allValid = links.every(
      (link) =>
        link.platform &&
        link.url &&
        isValidURL(link.url) &&
        doesURLMatchPlatform(link.url, link.platform)
    );

    if (!allValid) {
      toast.error("Please make sure all links are complete and valid.", {
        position: "bottom-center",
        icon: <ExclamationIcon className="w-4 h-4 text-white" />,
        closeButton: false,
        autoClose: 2000,
        style: {
          background: "#FF4D4F",
          color: "#fff",
          borderRadius: "5px",
          fontSize: "14px",
          fontWeight: "500",
          padding: "8px 16px",
          width: "325px",
          height: "25px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
      });
      return;
    }

    toast.success("Your changes have been successfully saved!", {
      position: "bottom-center",
      icon: <IconChangesSaved className="w-4 h-4 text-white" />,
      closeButton: false,
      autoClose: 2000,
      style: {
        background: "#2C2C2C",
        color: "#fff",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: "500",
        padding: "8px 16px",
        width: "325px",
        height: "25px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
      },
    });
  };

  return (
    <div className="fixed xl:absolute bottom-0 left-0 right-0 bg-white w-full rounded-b-xl">
      <div className="border-t border-gray-200 py-6 xl:py-4 px-6 xl:px-8 flex justify-end">
        <button
          className="bg-[#633CFF] w-full sm:w-auto text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#4520CE] active:bg-[#3D1EB8] active:scale-95 transition duration-150 ease-in-out"
          onClick={handleSave}
        >
          Save
        </button>

      </div>
    </div>
  );
};

export default LinkSaveButton;
