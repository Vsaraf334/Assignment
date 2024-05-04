import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="w-52 h-[1200px] bg-slate-400">
      <ul className="py-52">
        <li className="p-1">
          {" "}
          <Link to="/">Sign up</Link>
        </li>

        <li className="p-1"> Sign In</li>
      </ul>
    </div>
  );
}

export default Menu;
