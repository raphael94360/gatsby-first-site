import * as React from "react";
import { Link } from "gatsby";
import { container, heading, nav, lien } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={nav}>
          <li>
            <Link to="/" className={lien}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={lien}>
              About me
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
