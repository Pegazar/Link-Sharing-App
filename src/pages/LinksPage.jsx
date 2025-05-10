import React from "react";
import { useOutletContext } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { platformDomains } from "../data/platforms";
import LinkSaveButton from "../ui/LinkSaveButton";
import LinkItem from "../ui/LinkItem";

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
    saveLinks,
    setSavedLinks,
  } = linkTools;

  return (
    <div className="relative h-full flex flex-col">
      <div
        className="bg-white rounded-xl px-8 pt-8 pb-0 xl:pb-8 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          maxHeight: "calc(100vh - 200px)",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Customize your links</h2>
        <p className="text-gray-500 mb-6">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <LinkItem
          links={links}
          isValidURL={isValidURL}
          doesURLMatchPlatform={doesURLMatchPlatform}
          platforms={platforms}
          removeLink={removeLink}
          updateLink={updateLink}
          addNewLink={addNewLink}
        />
      </div>

      <LinkSaveButton
        links={links}
        saveLinks={saveLinks}
        isValidURL={isValidURL}
        doesURLMatchPlatform={doesURLMatchPlatform}
        setSavedLinks={setSavedLinks}
      />
    </div>
  );
};

export default LinksPage;
