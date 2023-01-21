import { pages } from "./lists/pages.js";

const topnav = document.getElementById("top-navbar");

if (topnav != null) {
  const navItems = document.createElement("ui");
  navItems.classList.add("top-navbar-ul", "navbar-text");
  pages.forEach((page) => {
    const item = document.createElement("li");
    const url = document.createElement("a");

    url.href = page.url;
    // url. = page.description;

    if (page.name != null) {
      url.innerText = page.name.toUpperCase();

      if (page.name == "home") {
        item.classList.add("active");
      }
    } else {
      const icon = document.createElement("i");
      page.icon.split(" ").forEach((ico) => icon.classList.add(ico));
      url.appendChild(icon);
    }

    item.appendChild(url);
    navItems.appendChild(item);
  });
  topnav.appendChild(navItems);
}
