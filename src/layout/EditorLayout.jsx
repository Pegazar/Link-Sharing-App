import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { Outlet } from "react-router-dom";
import useLinks from "../hooks/useLinks";
import useProfile from "../hooks/useProfile";


const EditorLayout = () => {
  const linkTools = useLinks();
  const profileHook = useProfile();
  const { profile } = profileHook;
  const [savedLinks, setSavedLinks] = useState([]);

  return (
    <div className="min-h-full xl:min-h-screen container mx-auto flex flex-col gap-4 pt-22 xl:pt-4 xl:pb-4">
      <Navbar />
      <div className="lg:flex flex-col lg:flex-row gap-4 flex-1 min-h-0">
        <div className="w-1/3 xl:flex-shrink-0 hidden xl:block">
          <ProfileCard 
            linkTools={linkTools} 
            savedLinks={savedLinks} 
            profile={profile}
          />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-none xl:rounded-xl">
          <div className="flex-1 overflow-auto">
            <Outlet context={{ ...linkTools, setSavedLinks, ...profileHook }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;