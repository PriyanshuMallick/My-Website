import { page } from "../utils/mytypes.js";

export const pages: page[] = [
  {
    name: "home",
    url: "#",
    icon: "fa-solid fa-house",
    description: `Navigate to home page`,
  },
  {
    name: "gallery",
    url: "#",
    icon: "fa-duotone fa-rectangle-vertical-history",
    description: "Navigate to gallery page",
  },
  {
    // name: "game",
    name: null,
    url: "#",
    icon: "fa-solid fa-gamepad",
    // icon: 'fa-solid fa-alien-8bit',
    // icon: 'fa-solid fa-gamepad-modern',
    description: "Navigate to game page",
  },
  {
    name: "contact",
    url: "#",
    icon: "fa-regular fa-address-card",
    // icon: 'fa-solid fa-address-card',
    description: "Navigate to contact page",
  },
  {
    name: "about",
    url: "#",
    // icon: 'fa-solid fa-user',
    icon: "fa-brands fa-atlassian",
    description: "Navigate to about page",
  },
];
