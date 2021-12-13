import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";
import Tables from "../views/Tables";

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  render() {
    const noNavbar = this.props.noNavbar;
    const noFooter = this.props.noFooter;
    const filter = this.state.filter;
    return (
      <Container fluid>
        <Row>
          <Col
            className="main-content p-0"
            lg={{ size: 12, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm="12"
            tag="main"
          >
            {!noNavbar && (
              <MainNavbar onFilter={(text) => this.handleFilter(text)} />
            )}
            <Tables filter={filter} />
            {!noFooter && <MainFooter />}
          </Col>
        </Row>
      </Container>
    );
  }

  handleFilter(text) {
    this.setState({
      filter: text,
    });
  }

  layout() {}
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
};

export default DefaultLayout;
