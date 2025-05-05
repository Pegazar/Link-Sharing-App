import React from "react";
import { useOutletContext } from "react-router-dom";
import CustomSelect from "../ui/CustomSelect";
import { LinkIcon } from "../assets/svg/svgicons";
import "react-toastify/dist/ReactToastify.css";
import { platformDomains } from "../data/platforms";
import LinkSaveButton from "../ui/LinkSaveButton";

const isValidURL = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
};

const doesURLMatchPlatform = (url, platformId) => {
  const domain = platformDomains[platformId];
  return domain ? url.includes(domain) : true;
};

const LinksPage = () => {
  const linkTools = useOutletContext();
  const {
    links,
    addNewLink,
    removeLink,
    updateLink,
    platforms,
    setSavedLinks,
  } = linkTools;

  return (
    <div className="relative h-full flex flex-col">
      <div
        className="bg-white rounded-xl p-8 overflow-auto pb-20"
        style={{
          scrollbarWidth: "none",
          height: "calc(100vh - 150px)",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Customize your links</h2>
        <p className="text-gray-500 mb-6">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <button
          className="w-full border-2 border-[#633CFF] text-[#633CFF] font-semibold py-2 cursor-grab rounded-lg hover:bg-[#EFEBFF] transition-colors mb-6"
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
                  />

                  <label className="block text-sm font-normal mb-1 mt-3">
                    Link
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. https://github.com/username"
                      className={`w-full py-2 pl-10 pr-3 border focus:ring-1 focus:ring-[#633CFF] ${
                        urlHasError ? "border-red-500" : "border-gray-300"
                      } outline-0 bg-white rounded-lg font-medium`}
                      value={link.url}
                      onChange={(e) =>
                        updateLink(link.id, "url", e.target.value)
                      }
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
      </div>

      <LinkSaveButton
        links={links}
        isValidURL={isValidURL}
        doesURLMatchPlatform={doesURLMatchPlatform}
        setSavedLinks={setSavedLinks}
      />
    </div>
  );
};

export default LinksPage;
