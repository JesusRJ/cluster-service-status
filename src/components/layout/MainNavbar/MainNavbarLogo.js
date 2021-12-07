import React from "react";
import PropTypes from "prop-types";
import { NavbarBrand } from "shards-react";

class MainNavbarLogo extends React.Component {
  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <NavbarBrand className="w-100 mr-0" style={{ lineHeight: "50px" }}>
          <div className="d-table m-auto">
            <img
              id="main-logo"
              className="d-inline-block align-top mr-1"
              style={{ maxWidth: "50px" }}
              src={require("../../../images/logo.png").default}
              alt="Cluster Service Status"
            />
            {!hideLogoText && (
              <span className="d-none d-md-inline ml-1">
                Cluster Service Status
              </span>
            )}
          </div>
        </NavbarBrand>
        {/* eslint-disable-next-line */}
      </div>
    );
  }
}

MainNavbarLogo.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
};

MainNavbarLogo.defaultProps = {
  hideLogoText: false,
};

export default MainNavbarLogo;
