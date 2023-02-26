import { pages } from "./list/pages.js";
import { socials } from "./list/socials.js";
import { navlist } from "./module/mytypes.js";

import { getBGimg, getCurrentPage } from "./function/getFunctions.js";
import { homeMain } from "./page/home.js";

function main1() {
  //? Top Nav
  addNav({
    navbar: document.getElementById("top-navbar"),
    items: pages,
    ulClassNames: ["top-nav"],
    active: "home",
    colors: ["accent-color-1"],
  });

  //? Side Mid Nav: Socials
  addNav({
    navbar: document.getElementById("side-nav social"),
    items: socials,
    ulClassNames: ["socials", "side-nav"],
    colors: ["social-logo-0"],
  });

  //? Side Bottom Nav: Minimized Top Nav
  // let isMinPagesBtnOn = false;
  // const bottomMinPagesSection = document.getElementById("side-nav min-pages");
  // const minPagesBtn = document.getElementById("min-pages-btn");
  // minPagesBtn.addEventListener("click", () => {
  //   isMinPagesBtnOn ? removesMinPagesbtns() : addMinPagesbtns();
  // });

  // function removesMinPagesbtns(): void {
  //   document.getElementById("minPagesBtns").remove();
  //   // document.getElementById("minPagesBtns").style.height = "100%";
  //   isMinPagesBtnOn = false;
  // }
  // function addMinPagesbtns(): void {
  //   let div = bottomMinPagesSection.appendChild(document.createElement("nav"));
  //   div.classList.add("btn-container", "regular");
  //   div.id = "minPagesBtns";
  //   // div.style.height = null;
  //   addNav({
  //     navbar: div,
  //     items: pages,
  //     ulClassNames: ["pages", "side-nav"],
  //     showicons: true,
  //     colors: ["accent-color-1"],
  //   });
  //   isMinPagesBtnOn = true;
  // }

  //? Adding BG Images

  document
    .getElementById("bgimg1")
    .appendChild(document.createElement("img"))
    .setAttribute("src", "assets/images/_bgimg1.png");

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
    if (navbar == null) {
      throw new Error("Passed Node is Null");
    }

    const ul = document.createElement("ui");
    ul.classList.add("navbar-ul", "navbar-text");
    ulClassNames.map((className) => ul.classList.add(className));

    items.map((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.url;

      if (active != null && item.name.toLowerCase() == active.toLowerCase()) {
        a.classList.add("active");
      }

      a.classList.add(item.name);
      addClasses(a.classList, colors);
      if ((showicons == null && item.useicon == false) || showicons == false) {
        a.innerText = item.name.toUpperCase();
      } else {
        const icon = document.createElement("i");
        addClasses(icon.classList, item.icon.split(" "));

        a.appendChild(icon);
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    navbar.appendChild(ul);
  }

  function addClasses(list: DOMTokenList, classList: string[]) {
    classList.map((className) => list.add(className));
  }
}

function main2() {
  const currentPage = getCurrentPage();

  //? Adding Background Image
  const bgImgs = getBGimg(currentPage);

  {
    let i = 0;
    const len = bgImgs.length;
    document.querySelectorAll(".bgimg").forEach((bgimg) => {
      bgimg.innerHTML = `<img src="${bgImgs[i].url}" alt="${bgImgs[i].alt}"></img>`;
      if (i < len) i++;
    });
  }

  if (currentPage.includes("home")) {
    homeMain();
  }
}

main2();
