// import React from "react";
// import "./ThemeToggle.css";
// import { FaSun, FaMoon } from "react-icons/fa";

// function ThemeToggle({ theme, toggleTheme }) {
//   return (
//     <label className="switch">
//       <input
//         type="checkbox"
//         onChange={toggleTheme}
//         checked={theme === "dark"}
//       />
//       <span className="slider">
//         {/* Sun icon */}
//         <FaSun className="icon sun" />

//         {/* Middle text */}
//         <span className="label-text">
//           {theme === "light" ? "Light" : "Dark"}
//         </span>

//         {/* Moon icon */}
//         <FaMoon className="icon moon" />

//         {/* Sliding thumb */}
//         <span className="thumb" />
//       </span>
//     </label>
//   );
// }

// export default ThemeToggle;


import React from "react";
import "./ThemeToggle.css";
// import { FaSun, FaMoon } from "react-icons/fa";
import { PiMoonStars } from "react-icons/pi";

import { MdSunny } from "react-icons/md";


const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      < PiMoonStars  className="icon moon" />
      <span className="label">{theme === "light" ? "Light" : "Dark"}</span>
      <MdSunny  className="icon sun" />
      <div className={`slider ${theme}`}></div>
    </div>
  );
};

export default ThemeToggle;
