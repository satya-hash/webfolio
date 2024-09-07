import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="divider" />
      <p>
        Copyright &copy; {new Date().getFullYear()} by <span>Satya</span>
      </p>
    </footer>
  );
}

export default Footer;
