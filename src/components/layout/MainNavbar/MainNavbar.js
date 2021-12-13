import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import MainNavbarLogo from "./MainNavbarLogo";

const MainNavbar = ({ stickyTop, onFilter }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <MainNavbarLogo />
          <NavbarSearch onFilter={(text) => onFilter(text)} />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool,
  onFilter: PropTypes.func,
};

MainNavbar.defaultProps = {
  stickyTop: true,
};

export default MainNavbar;
