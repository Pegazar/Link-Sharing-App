import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, IconChangesSaved } from "../assets/svg/svgicons";
import useProfile from "../hooks/useProfile";
import useLinks from "../hooks/useLinks";
import { platforms } from "../data/platforms";
import { toast } from "react-toastify";

const PreviewPage = () => {
  const { profile } = useProfile();
  const { links } = useLinks();

  const handleShareLink = () => {
    const shareUrl = `https://link-sharing-app-tan.vercel.app/`;

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        toast.success("Copied", {
          position: "bottom-center",
          icon: <IconChangesSaved className="w-4 h-4 text-white" />,
          theme: "dark",
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
          }
        });
      })
      .catch(() => {
        toast.error("Link problem");
      });
  };

  const getPlatformData = (platformId) =>
    platforms.find((p) => p.id === platformId) || {
      color: "bg-gray-800",
      Icon: null,
    };

  return (
    <div className="flex justify-center min-h-[50vh] rounded-none sm:rounded-b-4xl p-4 bg-white sm:bg-[#633CFF] relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-white rounded-xl p-6">
          <Link
            to="/links"
            className="inline-flex items-center justify-center border border-[#633CFF] text-[#633CFF] font-semibold px-6 py-2 rounded-lg hover:bg-[#EFEBFF] active:scale-95 transition-all duration-150"
          >
            Back to Editor
          </Link>

          <button
            className="bg-[#633CFF] border border-[#633CFF] text-white font-semibold py-2 px-6 rounded-lg cursor-pointer hover:bg-[#4520CE] active:bg-[#3D1EB8] active:scale-95 transition duration-150 ease-in-out"
            onClick={handleShareLink}
          >
            Share Link
          </button>

        </div>

        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[325px] rounded-2xl shadow-lg overflow-y-auto p-10">
          <div className="flex flex-col items-center mb-8">
            {profile.image ? (
              <img
                src={profile.image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#633CFF]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#EEEEEE] flex items-center justify-center"></div>
            )}

            {profile.firstName && profile.lastName ? (
              <h1 className="text-2xl font-bold mt-6 mb-3">
                {profile.firstName} {profile.lastName}
              </h1>
            ) : (
              <div className="w-[160px] h-[16px] bg-[#EEEEEE] rounded-lg mx-auto mt-6 mb-3"></div>
            )}

            {profile.email ? (
              <p className="text-gray-500">{profile.email}</p>
            ) : (
              <div className="w-[80px] h-[10px] bg-[#EEEEEE] rounded mx-auto"></div>
            )}
          </div>

          <div
            className="flex flex-col gap-4 max-h-[200px] overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {links.length > 0 ? (
              links.map((link) => {
                const { color, name, Icon } = getPlatformData(link.platform);
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-lg hover:opacity-80 transition-opacity ${color}`}
                  >
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                      <span className="text-white font-medium">{name}</span>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-white" />
                  </a>
                );
              })
            ) : (
              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <p className="text-gray-500">No links added yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
