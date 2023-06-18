import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, heading, nav, lien, siteTitle } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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
          <li>
            <Link to="/blog" className={lien}>
              Blog
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
