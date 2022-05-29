import React from "react";

export default function Menu({setIsMenu, isMenu}) {
  return (
    <i
      className={`bi ${
        isMenu ? "bi-x" : "bi-list"
      } mobile-nav-toggle d-xl-none`}
      onClick={() => setIsMenu(!isMenu)}
    ></i>
  );
}
