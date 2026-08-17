import React from "react";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <h2>About Me</h2>
      <img src="https://picsum.photos" alt="Image of myself" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
        adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
        pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus
        duis. Pretium tellus duis convallis tempus leo eu aenean.
      </p>
      <a>GitHub link</a>
      <a>Linkedin link</a>
    </div>
  );
}

export default SideBar;
