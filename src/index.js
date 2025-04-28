"use strict";

import "./styles.css";
import { fetchUsers } from "./services/api.js";
import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";
import { UserCard } from "./components/usercard.js";
import { addTwoNumbers } from "./mathFunction.js";

async function init() {
  document.body.prepend(Header());
  document.body.appendChild(Footer());
  const main = document.createElement("main");
  document.body.insertBefore(main, document.querySelector("footer"));
  const users = await fetchUsers();
  users.forEach((user) => main.appendChild(UserCard(user)));
}
init();
