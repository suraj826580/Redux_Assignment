import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/todo", title: "Todo" },
  { to: "/counter", title: "Counter" },
];
export default function Navbar() {
  return (
    <div>
      {links.map(({ to, title }, ind) => {
        return (
          <Link to={to} key={ind} style={{ margin: "10px" }}>
            {title}
          </Link>
        );
      })}
    </div>
  );
}
