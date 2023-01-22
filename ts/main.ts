import { pages } from "./lists/pages.js";
import { socials } from "./lists/socials.js";
import { navlist } from "./utils/mytypes.js";

//? Top Nav
addNav({
  navbar: document.getElementById("top-navbar"),
  itemlist: pages,
  classNames: ["top-nav"],
  active: "home",
});

//? Side Mid Nav: Socials
addNav({
  navbar: document.getElementById("side-nav social"),
  itemlist: socials,
  classNames: ["socials", "side-nav", "btn-container-solid"],
});

//? Side Bottom Nav: Minimized Top Nav
const bottomMinPagesSection = document.getElementById("side-nav min-pages");
const minPageNavBtn = document.createElement("i");
minPageNavBtn.classList.add("fas", "fa-bars", "hanburger", "min-page");
let div = bottomMinPagesSection.appendChild(document.createElement("nav"));
bottomMinPagesSection.appendChild(minPageNavBtn);

//? Adding BG Images

document
  .getElementById("bgimg1")
  .appendChild(document.createElement("img"))
  .setAttribute("src", "assets/images/_bgimg1.png");

addNav({
  navbar: div,
  itemlist: pages,
  classNames: ["socials", "side-nav", "btn-container-invisible"],
  showicons: true,
});

function addNav({
  navbar,
  itemlist: items,
  classNames,
  showicons,
  active,
}: {
  navbar: Node;
  itemlist: navlist[];
  classNames: string[];
  showicons?: boolean;
  active?: string;
}) {
  if (navbar == null) {
    throw new Error("Passed Node is Null");
  }

  const navItems = document.createElement("ui");

  navItems.classList.add("navbar-ul", "navbar-text");
  classNames.map((className) => navItems.classList.add(className));

  items.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.url;

    if (active != null && item.name.toLowerCase() == active.toLowerCase()) {
      a.classList.add("active");
    }

    if ((showicons == null && item.useicon == false) || showicons == false) {
      a.innerText = item.name.toUpperCase();
      a.classList.add(item.name);
    } else {
      const icon = document.createElement("i");
      item.icon.split(" ").map((ico) => icon.classList.add(ico));
      a.appendChild(icon);
    }

    li.appendChild(a);
    navItems.appendChild(li);
  });

  navbar.appendChild(navItems);
}
