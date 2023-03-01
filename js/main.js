import { getBGimg, getCurrentPage } from "./function/getFunctions.js";
import { homeMain } from "./page/home.js";
const currentPage = getCurrentPage();
//? Adding Background Image
const bgImgs = getBGimg(currentPage);
{
    let i = 0;
    const len = bgImgs.length;
    document.querySelectorAll(".bgimg").forEach((bgimg) => {
        bgimg.innerHTML = `<img src="${bgImgs[i].url}" alt="${bgImgs[i].alt}"></img>`;
        if (i < len)
            i++;
    });
}
if (currentPage.includes("home")) {
    homeMain();
}
//# sourceMappingURL=main.js.map