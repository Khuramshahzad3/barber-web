import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleClickOutside = (event) => {
    if (this.navbar && !this.navbar.contains(event.target)) {
      this.setState({ clicked: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <>
        <nav ref={(node) => (this.navbar = node)}>
          <Link to="/" id="logo2" className="font-bold">
            TRIMETH
          </Link>
          <div>
            <ul
              id="navbar3"
              className={this.state.clicked ? "#navbar3 active" : "#navbar3"}
            >
              <Link onClick={this.handleclick} to="/" className="home3">
                <li>Home</li>
              </Link>
              <Link onClick={this.handleclick} to="/services" className="services3">
                <li>Services</li>
              </Link>
              <Link onClick={this.handleclick} to="/aboutus" className="Aboutus2">
                <li>About Us</li>
              </Link>
              <Link onClick={this.handleclick} to="/contactus" className="Contactus2">
                <li>Contact Us</li>
              </Link>
              <Link onClick={this.handleclick} to="/book" className="bg-pink-500 p-2">
                <li className="hover:text-blue-800 !important transition duration-300 ease-in-out">Book</li>
              </Link>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
