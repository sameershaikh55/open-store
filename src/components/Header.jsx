import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ ClickEvent }) => {
  // FOR DESKTOP NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".NavbarContainerPinned");
    header.classList.toggle("sticky", window.scrollY > 700);
  });
  // FOR DESKTOP NAVBAR SCROLLING EFFECT END

  // FOR MOBILE NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".NavbarContainer.mobilePinned");
    var hrHeader = document.querySelector(".hrHeader");
    header.classList.toggle("sticky", window.scrollY > 0);
    hrHeader.classList.toggle("d-none", window.scrollY > 0);
  });
  // FOR MOBILE NAVBAR SCROLLING EFFECT END

  return (
    <>
      {/* NORMAL DESKTOP HEADER START */}
      <div id="home" className="NavbarContainer w-100">
        <div className="page_container">
          <div className="container-fluid">
            <div className="d-flex justify-content-center justify-content-lg-between align-items-center position-relative">
              <div>
                <h5 className="mb-0 fw-bold head_color">OpenStore</h5>
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
                    <Link
                      to="home"
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-500}
                      className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="ms-4">
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                    >
                      About
                    </Link>
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
            <hr style={{ opacity: "1" }} className="bg-dark" />
          </div>
        </div>
      </div>
      {/* NORMAL DESKTOP HEADER START */}

      {/* PINNED HEADER DESKTOP START */}
      <div className="NavbarContainer NavbarContainerPinned w-100">
        <div className="page_container">
          <div className="container-fluid">
            <div className="d-flex justify-content-center justify-content-lg-between align-items-center position-relative">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 fw-bold head_color">OpenStore</h5>
                <div className="d-none d-lg-block ms-5">
                  <ul className="list-unstyled d-inline-flex align-items-center mb-0">
                    <li>
                      <Link
                        to="home"
                        smooth={true}
                        duration={600}
                        spy={true}
                        offset={-500}
                        className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="ms-4">
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                      >
                        About
                      </Link>
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
              <div>
                {/* NEWSLETTER START */}
                <div className="newsletter_containerHeader d-flex align-items-center px-3">
                  <div>
                    <div className="inp_container position-relative">
                      <input
                        type="text"
                        className="rounded-3"
                        placeholder="Enter your store website"
                      />
                      <h6 className="themeColor">http://</h6>
                    </div>
                  </div>
                  <div className="ms-2">
                    <button className="searchBtn small mb-0 w-100 text-white border-0 px-3">
                      Get My Free Offer
                    </button>
                  </div>
                </div>
                {/* NEWSLETTER END */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PINNED HEADER DESKTOP END */}

      {/* PINNED HEADER MOBILE START */}
      <div id="home" className="NavbarContainer mobilePinned w-100">
        <div className="page_container">
          <div className="container-fluid">
            <div className="d-flex justify-content-center justify-content-lg-between align-items-center position-relative">
              <div>
                <h5 className="mb-0 fw-bold head_color">OpenStore</h5>
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
                    <Link
                      to="home"
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-500}
                      className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="ms-4">
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="text-decoration-none text-dark h6 mb-0 curosorPointer"
                    >
                      About
                    </Link>
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
            <hr style={{ opacity: "1" }} className="hrHeader bg-dark" />
          </div>
        </div>
      </div>

      {/* PINNED HEADER MOBILE END */}
    </>
  );
};

export default Header;
