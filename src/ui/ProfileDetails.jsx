import React from "react";
import { UploadImageIcon, TrashIcon } from "../assets/svg/svgicons";

const ProfileDetails = ({
  profile,
  handleImageChange,
  fileInputRef,
  triggerFileInput,
  removeImage
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 xl:gap-2 bg-gray-100 rounded-lg p-6">
      <label className="text-sm font-medium text-[#757575] w-1/3">
        Profile picture
      </label>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-end gap-4 w-2/3">
        <div className="relative w-[180px] h-[180px] rounded-lg overflow-hidden group cursor-pointer">
          {profile.image ? (
            <>
              <img
                src={profile.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/60 hidden group-hover:flex items-center flex-col justify-center text-sm font-medium duration-200"
                onClick={triggerFileInput}
              >
                <UploadImageIcon className="w-8 h-8 mb-2 text-white" />
                <span className="text-white">Change Image</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className="absolute top-2 right-2 rounded-full p-1 shadow z-10"
                title="Remove"
              >
                <TrashIcon className="w-5 h-5 text-white cursor-pointer" />
              </button>
            </>
          ) : (
            <div
              className="absolute inset-0 bg-[#EFEBFE] flex items-center justify-center flex-col"
              onClick={triggerFileInput}
            >
              <div className="text-[#633CFF] text-sm font-medium flex flex-col items-center">
                <UploadImageIcon className="w-8 h-8 mb-2" />
                <span>+ Upload Image</span>
              </div>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <p className="text-sm text-gray-500 max-w-[250px]">
          Image must be below 1024×1024px. Use PNG, JPG, or BMP format.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
