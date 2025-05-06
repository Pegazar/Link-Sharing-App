import { useState, useRef, useEffect } from "react";

const STORAGE_KEY = "userProfile";

const useProfile = () => {
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { image: "", firstName: "", lastName: "", email: "" };

    try {
      const parsed = JSON.parse(stored);
      return {
        image: parsed.image || "",
        firstName: parsed.firstName || "",
        lastName: parsed.lastName || "",
        email: parsed.email || ""
      };
    } catch (err) {
      console.error("Failed to read profile data:", err);
      return { image: "", firstName: "", lastName: "", email: "" };
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    console.log("Profile updated and saved:", profile);
  }, [profile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setProfile((prev) => ({ ...prev, image: "" }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const updateField = (field, value) => {
    setProfile((prev) => {
      const updated = { ...prev, [field]: value };
      console.log(`Field ${field} updated to: ${value}`, updated);
      return updated;
    });
  };

  return {
    profile,
    setProfile,
    fileInputRef,
    handleImageChange,
    removeImage,
    triggerFileInput,
    updateField,
  };
};

export default useProfile;
