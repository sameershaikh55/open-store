import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ ClickEvent }) => {
  // FOR NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".NavbarContainer");
    header.classList.toggle("sticky", window.scrollY > 1);
  });
  // FOR NAVBAR SCROLLING EFFECT END .
  return (
    <div className="NavbarContainer w-100">
      <div className="page_container">
        <div className="container-fluid">
          <div className="d-flex justify-content-center justify-content-lg-between align-items-center position-relative">
            <div>
              <h5 className="mb-0 fw-bold">OpenStore</h5>
            </div>
            {/* <!-- HAMBURGER START --> */}
            <div className="hamburger_container d-block d-lg-none">
              <GiHamburgerMenu
                fontSize="1.5rem"
                onClick={ClickEvent}
                color="rgba(131, 136, 150, 0.5)"
              />
            </div>
            {/* <!-- HAMBURGER END --> */}
            <div className="d-none d-lg-block">
              <ul className="list-unstyled d-inline-flex align-items-center mb-0">
                <li>
                  <NavLink
                    className="text-decoration-none text-dark h6 mb-0"
                    to=""
                  >
                    Home
                  </NavLink>
                </li>
                <li className="ms-4">
                  <NavLink
                    className="text-decoration-none text-dark h6 mb-0"
                    to=""
                  >
                    About
                  </NavLink>
                </li>
                <li className="ms-4">
                  <a
                    href="https://jobs.lever.co/OpenStore/"
                    className="text-decoration-none text-dark h6 mb-0"
                    target="blank"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Header;
