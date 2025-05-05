import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { Outlet } from "react-router-dom";
import useLinks from "../hooks/useLinks";
import useProfile from "../hooks/useProfile";

const EditorLayout = () => {
  const linkTools = useLinks();
  const [savedLinks, setSavedLinks] = useState([]);
  const { profile } = useProfile();

  return (
    <div className="min-h-screen container mx-auto flex flex-col gap-4 py-4">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="w-1/3 flex-shrink-0">
          <ProfileCard linkTools={linkTools} savedLinks={savedLinks} profile={profile} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-xl">
          <div className="flex-1 overflow-auto">
            <Outlet context={{ ...linkTools, setSavedLinks }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
