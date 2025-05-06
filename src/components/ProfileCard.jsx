import React from "react";
import { ArrowRightIcon, PhoneMockup } from "../assets/svg/svgicons";

const ProfileCard = ({ linkTools, savedLinks, profile }) => {
  const { links, platforms } = linkTools;

  const showLinks = savedLinks.length > 0 ? savedLinks : links;

  const validLinks = showLinks.filter(
    (link) => link.platform && link.platform !== ""
  );

  const getPlatform = (platformId) => {
    return (
      platforms.find((p) => p.id === platformId) || {
        name: platformId,
        color: "bg-gray-400",
      }
    );
  };

  const displayEmail = profile?.email || null;

  return (
    <div className="bg-white rounded-xl p-10 h-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px] h-[605px]">
        <PhoneMockup className="absolute inset-0 w-full h-full" />

        <div className="relative z-10 flex flex-col items-center justify-center px-12 py-16 h-full">
          <div className="text-center mb-10 shrink-0">
            {profile?.image ? (
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 bg-[#EEEEEE] rounded-full mx-auto mb-5"></div>
            )}

            <div className="w-[160px] h-[16px] bg-[#EEEEEE] rounded-lg mx-auto mb-3"></div>

            {displayEmail ? (
              <div className="text-sm text-gray-500">{displayEmail}</div>
            ) : (
              <div className="w-[80px] h-[10px] bg-[#EEEEEE] rounded mx-auto"></div>
            )}
          </div>

          <div
            className="flex-1 w-full space-y-5 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {validLinks.map((link) => {
              const platform = getPlatform(link.platform);
              const PlatformIcon = platform.Icon;
              return (
                <div
                  key={link.id}
                  className={`p-3 cursor-pointer h-[40px] text-white text-center text-xs rounded-md font-normal w-full flex justify-between items-center ${platform.color}`}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div className="flex items-center gap-2">
                    {PlatformIcon && <PlatformIcon />}
                    <span>{platform.name}</span>
                  </div>
                  <span>
                    <ArrowRightIcon />
                  </span>
                </div>
              );
            })}

            {savedLinks.length === 0 &&
              Array.from({ length: Math.max(0, 5 - validLinks.length) }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="bg-[#EEEEEE] h-[40px] p-3 rounded-md w-full"
                  ></div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;