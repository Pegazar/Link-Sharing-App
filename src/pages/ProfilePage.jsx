import React from "react";
import FormField from "../ui/FormField";
import { useOutletContext } from "react-router-dom";
import ProfileSaveButton from "../ui/ProfileSaveButton";
import ProfileDetails from "../ui/ProfileDetails";

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

  const validateProfile = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!profile.firstName.trim()) return false;
    if (!profile.lastName.trim()) return false;
    if (!emailRegex.test(profile.email)) return false;
    return true;
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="bg-white rounded-xl pt-8 px-8">
          <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
          <p className="text-gray-500 mb-6">
            Add your details to create a personal touch to your profile.
          </p>

          <form className="flex flex-col gap-6">
            <ProfileDetails
              profile={profile}
              fileInputRef={fileInputRef}
              handleImageChange={handleImageChange}
              triggerFileInput={triggerFileInput}
              removeImage={removeImage}
            />
            <div className="flex flex-col gap-4 bg-gray-100 rounded-lg px-6 py-8 mb-4 sm:mb-0">
              <FormField
                label="First name"
                required
                placeholder="e.g. John"
                value={profile.firstName}
                onChange={handleInputChange("firstName")}
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
      </div>

      <ProfileSaveButton
        profile={profile}
        saveProfile={saveProfile}
        onValidate={validateProfile}
      />
    </div>
  );
};

export default ProfilePage;