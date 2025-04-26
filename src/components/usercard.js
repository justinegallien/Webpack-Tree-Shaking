export function UserCard({ name, age }) {
  const card = document.createElement("div");
  card.classList = "card";

  const h2 = document.createElement("h2");
  h2.innerText = name;
  const p = document.createElement("p");
  p.innerText = age;

  card.appendChild(h2);
  card.appendChild(p);
  return card;
}



