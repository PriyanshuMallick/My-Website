import { pages } from "./lists/pages.js";
import { addStyleFile } from "./utils/csshacks.js";
import "./../css/style.css";
let topnav = document.getElementById("top-navbar");
// let test = document.getElementById("test");
// test.innerHTML = "test";
if (topnav != null) {
    let navs = document.createElement("ui");
    pages.forEach((page) => {
        const item = document.createElement("li");
        const url = document.createElement("a");
        url.href = page.url;
        // url. = page.description;
        if (page.name != null) {
            url.innerText = page.name.toUpperCase();
        }
        else {
            const icon = document.createElement("i");
            page.icon.split(" ").forEach((ico) => icon.classList.add(ico));
            url.appendChild(icon);
        }
        item.appendChild(url);
        navs.appendChild(item);
    });
    topnav.appendChild(navs);
}
addStyleFile(`css/min/style.min.css`);
//# sourceMappingURL=main.js.map