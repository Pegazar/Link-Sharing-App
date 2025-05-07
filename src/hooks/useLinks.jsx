import { useState } from "react";
import platforms from "../data/platforms";

const STORAGE_KEY = "linkSharingAppLinks";

const useLinks = () => {
  const [links, setLinks] = useState(() => {
    const savedLinks = localStorage.getItem(STORAGE_KEY);
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  const addNewLink = () => {
    const newId = links.length > 0 ? Math.max(...links.map(link => link.id)) + 1 : 1;
    setLinks([...links, { id: newId, platform: "", url: "" }]);
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const updateLink = (id, field, value) => {
    setLinks(links.map(link => link.id === id ? { ...link, [field]: value } : link));
  };

  const clearLinks = () => {
    localStorage.removeItem(STORAGE_KEY);
    setLinks([]);
  };

  const saveLinks = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  };

  return {
    links,
    addNewLink,
    removeLink,
    updateLink,
    clearLinks,
    saveLinks,
    platforms
  };
};

export default useLinks;
