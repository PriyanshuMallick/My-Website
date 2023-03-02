import { pages } from "../list/pages.js";
import { socials } from "../list/socials.js";
import { navlist } from "../module/mytypes.js";
import { updateTime } from "../function/time.js";
import { screenWidth } from "../module/applayout.js";

export function homeMain() {
  //? ------------------------ Clock ------------------------

  if (screenWidth() > 580) {
    document.getElementById("datetime").innerHTML =
      `<div id="clock" class="time-text">` +
      `<div id="hour">09</div>` +
      `<div id="minute">12</div>` +
      `</div>` +
      `<div id="date" class="date-text">01/01 sun</div>`;
    document.addEventListener("DOMContentLoaded", () => {
      updateTime();
      setInterval(updateTime, 1000);
    });
  }

  //? ----------------------- Top Nav -----------------------

  addNav({
    navbar: document.getElementById("top-navbar"),
    items: pages,
    ulClassNames: ["top-nav"],
    active: "home",
    colors: ["accent-color-1"],
  });

  //? ------------------ Side Mid Nav: Socials ------------------

  addNav({
    navbar: document.getElementById("side-nav social"),
    items: socials,
    ulClassNames: ["socials", "side-nav"],
    colors: ["social-logo-0"],
  });

  function addNav({
    navbar,
    items,
    ulClassNames,
    showicons,
    active,
    colors,
  }: {
    navbar: Node;
    items: navlist[];
    ulClassNames: string[];
    showicons?: boolean;
    active?: string;
    colors: string[];
  }): void {
    if (!navbar) {
      throw new Error("Passed Node is Null");
    }

    const ul = document.createElement("ui");
    ul.classList.add("navbar-ul", "navbar-text", ...ulClassNames);

    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.url;

      if (active != null && item.name.toLowerCase() == active.toLowerCase()) {
        a.classList.add("active");
      }

      a.classList.add(item.name, ...colors);

      // ? Add Text or Icons
      (showicons == null && item.useicon == false) || showicons == false
        ? (a.innerText = item.name.toUpperCase()) // Add Text
        : (a.innerHTML = `<i class="${item.icon}"></i>`); // Add Icon

      li.appendChild(a);
      ul.appendChild(li);
    });

    navbar.appendChild(ul);
  }
}
