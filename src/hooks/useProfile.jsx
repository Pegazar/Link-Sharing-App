import { useRef, useState, useEffect } from "react";

const STORAGE_KEY = "userProfile";

const defaultProfile = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
};

const useProfile = () => {
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProfile;

    try {
      const parsed = JSON.parse(stored);
      return { ...defaultProfile, ...parsed }; // Eksik alan varsa tamamla
    } catch (err) {
      console.error("Profil verisi okunamadı:", err);
      return defaultProfile;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new CustomEvent("profileUpdated", { detail: profile }));
  }, [profile]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY) {
        try {
          const newProfile = JSON.parse(e.newValue);
          if (JSON.stringify(newProfile) !== JSON.stringify(profile)) {
            setProfile(newProfile);
          }
        } catch (err) {
          console.error("localStorage verisi okunamadı:", err);
        }
      }
    };

    const handleCustomEvent = (e) => {
      if (JSON.stringify(e.detail) !== JSON.stringify(profile)) {
        setProfile(e.detail);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("profileUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("profileUpdated", handleCustomEvent);
    };
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
    setProfile((prev) => ({ ...prev, [field]: value }));
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
