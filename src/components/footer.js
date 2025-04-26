"use strict";

export function Footer() {
  const footer = document.createElement("footer");
  footer.style.padding = "1rem";
  footer.style.backgroundColor = "teal";
  footer.style.color = "purple";
  footer.style.textAlign = "center";
  const p = document.createElement("p");
  p.innerText = " &copy; Justine Gallien 2025";
  footer.appendChild(p);

  return footer;
}
