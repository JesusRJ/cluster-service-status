import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFilter(e.target.value);
  }

  render() {
    return (
      <div className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <InputGroup seamless className="ml-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">search</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput
            className="navbar-search"
            placeholder="Search for something..."
            onChange={this.handleChange}
          />
        </InputGroup>
      </div>
    );
  }
}

export default NavbarSearch;
