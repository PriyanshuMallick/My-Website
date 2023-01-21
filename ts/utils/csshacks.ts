export function addStyleFile(href: string): void {
  const headTag = document.getElementsByTagName("head")[0];
  const linkTag = document.createElement("link");

  linkTag.rel = "stylesheet";
  linkTag.href = href;
  headTag.appendChild(linkTag);
}
