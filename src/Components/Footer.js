import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="flex flex-col sm:flex-col md:flex-row">
            <div className="footer_col">
              <h4 className="salon">About The Salon</h4>
              <p>
                Welcome to <span className="font-bold">TRIMETH</span> , where
                tradition meets style. Our expert barbers provide a full range
                of grooming services, including classic haircuts, modern styles,
                beard trims, and straight razor shaves
              </p>
            </div>
            <div className="footer_col">
              <h4 className="navg">Navigations</h4>
              <ul>
                <Link
                  to="/"
                  className="home2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="/services"
                  className="services1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Services</li>
                </Link>

                <Link
                  to="/Aboutus"
                  className="Aboutus1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>About Us</li>
                </Link>
                <Link
                  to="/Contactus"
                  className="Contactus1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Contact Us</li>
                </Link>
                <Link
                  to="/book"
                  className="projects1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>Book</li>
                </Link>
              </ul>
            </div>
            <div className="footer_col">
              <h4 className="whours">Working Hours</h4>
              <h5 className="font-semibold mb-2">Monday - Thursday</h5>
              <p className="mb-3">10:00AM - 11:00PM</p>

              <h5 className="font-semibold mb-2">Saturday - Sunday</h5>

              <p className="mb-3">10:00AM - 11:00PM</p>

              <h5 className="font-semibold mb-2">Friday</h5>

              <p className="mb-3">10:00AM - 1:00PM</p>
            </div>
            <div className="footer_col">
              <h4 className="cont">Get in Touch</h4>
              <p>
                {" "}
                <i className="fa-solid fa-phone" /> : +92334567892
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-envelope" /> : trimeth@gmail.com
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-location-dot"></i> : Sook Kalan Gujrat
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
