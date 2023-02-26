import { pages } from "../list/pages.js";
import { socials } from "../list/socials.js";
export function homeMain() {
    //? ------------------------ Clock ------------------------
    // if (screenWidth() > 580) {
    //   document.getElementById("datetime").innerHTML =
    //     `<div id="clock" class="time-text">` +
    //     `<div id="hour">09</div>` +
    //     `<div id="minute">12</div>` +
    //     `</div>` +
    //     `<div id="date" class="date-text">01/01 sun</div>`;
    //   document.addEventListener("DOMContentLoaded", () => {
    //     updateTime();
    //     setInterval(updateTime, 1000);
    //   });
    // }
    //? ----------------------- Top Nav -----------------------
    addNav({
        navbar: document.getElementById("top-navbar"),
        items: pages,
        ulClasses: "top-nav",
        active: "home",
        colors: "accent-color-1",
    });
    //? ------------------ Side Mid Nav: Socials ------------------
    addNav({
        navbar: document.getElementById("side-nav social"),
        items: socials,
        // ulClasses: "socials side-nav", // " style="padding-left: 0px;
        ulClasses: "socials side-nav",
        colors: "social-logo-0",
    });
}
function addNav({ navbar, items, ulClasses, showicons, active, colors, }) {
    if (navbar == null) {
        throw new Error("Passed Node is Null");
    }
    let findActive = active != null ? true : false;
    let setActive = "";
    let navs = `<ul class="navbar-ul navbar-text ${ulClasses}">`;
    items.forEach((item) => {
        setActive = "";
        if (findActive && item.name.toLowerCase() == active.toLowerCase()) {
            setActive = "active";
            findActive = false;
        }
        //? Open Tags
        navs += `<li><a href="${item.url}" class="${item.name} ${colors} ${setActive}">`;
        //? Add Text or Icons
        (showicons == null && item.useicon == false) || showicons == false
            ? (navs += item.name.toUpperCase()) // Add Text
            : (navs += `<i class="${item.icon}"></i>`); // Add Icon
        //? Close Tags
        navs += `</a></li>`;
    });
    navs += "</ul>";
    navbar.innerHTML = navs;
}
function addClasses(list, classList) {
    classList.map((className) => list.add(className));
}
//# sourceMappingURL=home.js.map