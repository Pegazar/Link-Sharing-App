import React from "react";
import FormField from "../ui/FormField";
import { UploadImageIcon, TrashIcon } from "../assets/svg/svgicons";
import { useOutletContext } from "react-router-dom";
import ProfileSaveButton from "../ui/ProfileSaveButton";

const ProfilePage = () => {
  const {
    profile,
    saveProfile,
    fileInputRef,
    handleImageChange,
    removeImage,
    triggerFileInput,
    updateField,
  } = useOutletContext();

  const handleInputChange = (field) => (e) => {
    updateField(field, e.target.value);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div
        className="bg-white rounded-xl p-8 overflow-auto pb-20"
        style={{ scrollbarWidth: "none", height: "calc(100vh - 150px)" }}
      >
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
        <p className="text-gray-500 mb-6">
          Add your details to create a personal touch to your profile.
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-6">
            <label className="text-sm font-medium text-[#757575] w-1/3">
              Profile picture
            </label>
            <div className="flex items-center justify-end gap-4 w-2/3">
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

          <div className="flex flex-col gap-4 bg-gray-100 rounded-lg p-6">
            <FormField
              label="First name"
              required
              placeholder="e.g. John"
              value={profile.firstName}
              onChange={handleInputChange('firstName')}
            />
            <FormField
              label="Last name"
              required
              placeholder="e.g. Doe"
              value={profile.lastName}
              onChange={handleInputChange("lastName")}
            />
            <FormField
              label="Email"
              type="email"
              placeholder="e.g. john@example.com"
              value={profile.email}
              onChange={handleInputChange("email")}
            />
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white w-full rounded-b-xl">
        <ProfileSaveButton profile={profile} saveProfile={saveProfile} />
      </div>
    </div>
  );
};

export default ProfilePage;