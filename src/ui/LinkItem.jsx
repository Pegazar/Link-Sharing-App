import React from "react";
import CustomSelect from "./CustomSelect";
import { LinkIcon } from "../assets/svg/svgicons";

const LinkItem = ({
  links,
  isValidURL,
  doesURLMatchPlatform,
  platforms,
  removeLink,
  updateLink,
  addNewLink
}) => {
  return (
    <>
      <button
        className="w-full border-2 border-[#633CFF] text-[#633CFF] font-semibold py-2 cursor-grab rounded-lg hover:bg-[#EFEBFF] transition-all duration-100 active:scale-95 mb-6"
        onClick={addNewLink}
      >
        + Add new link
      </button>
      <div className="links-container">
        {links.length === 0 ? (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Let's get you started</h3>
            <p className="text-gray-500 mb-4">
              Use the "Add new link" button to start building your profile
            </p>
          </div>
        ) : (
          links.map((link, index) => {
            const urlHasError =
              link.url &&
              (!isValidURL(link.url) ||
                !doesURLMatchPlatform(link.url, link.platform));

            return (
              <div className="bg-gray-100 p-5 rounded-lg mb-4" key={link.id}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-[#757575]">
                    = Link #{index + 1}
                  </h3>
                  <button
                    className="text-gray-500 font-normal cursor-pointer"
                    onClick={() => {
                      removeLink(link.id);
                      setSavedLinks((prev) =>
                        prev.filter((item) => item.id !== link.id)
                      );
                    }}
                  >
                    Remove
                  </button>
                </div>

                <label className="block text-sm font-normal mb-1">
                  Platform
                </label>
                <CustomSelect
                  options={platforms}
                  value={link.platform}
                  onChange={(value) => updateLink(link.id, "platform", value)}
                  openDirection={index === 0 ? "down" : "up"}
                />

                <label className="block text-sm font-normal mb-1 mt-3">
                  Link
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. https://github.com/username"
                    className={`w-full py-2 pl-10 pr-3 outline-0 bg-white rounded-lg font-medium ${urlHasError
                        ? "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                        : "ring-1 ring-transparent focus:ring-1 focus:ring-[#633CFF]"
                      }`}
                    value={link.url}
                    onChange={(e) => updateLink(link.id, "url", e.target.value)}
                  />
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                {urlHasError && (
                  <p className="text-red-500 text-sm mt-1">
                    {isValidURL(link.url)
                      ? "This link doesn't match the selected platform."
                      : "Please enter a valid URL (e.g. https://example.com)."}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default LinkItem;
