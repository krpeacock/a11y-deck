import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, navigate } from "gatsby";

import Header from "./header";
import "./layout.css";
import "./custom.css";

const Layout = ({ children, location }) => {
  const screens = ["/", "/1", "/2"];

  // useEffect(() => {
  //   document.onkeydown = function(evt) {
  //     evt = evt || window.event;
  //     const index = screens.indexOf(location.pathname);

  //     if (evt.key === "ArrowLeft") {
  //       if (index > 0) {
  //         navigate(screens[index - 1]);
  //       }
  //       return;
  //     }
  //     if (evt.key === "ArrowRight") {
  //       if (index < screens.length - 1) {
  //         navigate(screens[index + 1]);
  //       }
  //     }
  //   };
  // }, location);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <main key={location.pathname}>{children}</main>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
