import { BGImages } from "../list/assets.js";
import { pages } from "../list/pages.js";
import { image } from "../module/mytypes.js";

export const getCurrentPage = (): string => {
  const path = window.location.pathname;
  const page = pages.find((page) => path.includes(page.url));
  return page ? page.name : "unknown page";
};

export const getBGimg = (currentPage: string): image[] => {
  if (Object.prototype.hasOwnProperty.call(BGImages, currentPage)) {
    return BGImages[currentPage];
  }
  throw new Error("The Background Image for the current page doesn't Exist");
};
