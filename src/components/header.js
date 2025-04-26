"use strict";

export function Header() {
  const header = document.createElement("header");
  header.style.padding = "1rem";
  header.style.backgroundColor = "teal";
  header.style.color = "purple";

  const h1 = document.createElement("h1");
  h1.innerText = "Webpack Demo";
  header.appendChild(h1);

  return header;
}
