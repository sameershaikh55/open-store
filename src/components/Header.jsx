import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";

const Header = () => {
	const [sidebar, setsidebar] = useState(false);

	useEffect(() => {
		// FOR DESKTOP NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			const header = document.querySelector(".NavbarContainerPinned");
			const headerMobile = document.querySelector(".mobilePinned");
			const hrHeaderMobile = document.querySelector(".hrHeader");

			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 700);
			}

			if (headerMobile !== null) {
				headerMobile.classList.toggle("sticky", window.scrollY > 0);
				headerMobile.classList.toggle("shadow-sm", window.scrollY > 0);
			}

			if (hrHeaderMobile !== null) {
				hrHeaderMobile.classList.toggle("d-none", window.scrollY > -10);
			}
		});
		// FOR DESKTOP NAVBAR SCROLLING EFFECT END
	}, []);

	return (
		<>
			<div id="home"></div>
			{/* NORMAL DESKTOP HEADER START */}
			<div className="NavbarContainer w-100">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-flex justify-content-center justify-content-lg-between align-items-center position-relative">
							<div>
								<h5 className="mb-0 head_color textG">OpenStore</h5>
							</div>
							{/* <!-- HAMBURGER START --> */}
							<div className="hamburger_container d-block d-lg-none">
								<GiHamburgerMenu fontSize="1.5rem" />
							</div>
							{/* <!-- HAMBURGER END --> */}
							<div className="d-none d-lg-block">
								<ul className="list-unstyled d-inline-flex align-items-center mb-0 textS">
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
								<h5 className="mb-0 head_color textG">OpenStore</h5>
								<div className="d-none d-lg-block ms-5">
									<ul className="list-unstyled d-inline-flex align-items-center mb-0 textS">
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
											<h6>http://</h6>
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
			<div
				className="NavbarContainer mobilePinned  w-100"
				style={{ background: (sidebar && "#fff") || "" }}
			>
				<div className="page_container">
					<div className="container-fluid">
						<div
							className={`d-flex justify-content-center justify-content-lg-between align-items-center position-relative`}
						>
							<div>
								<h5 className="mb-0 head_color textG">OpenStore</h5>
							</div>

							{/* <!-- HAMBURGER START --> */}
							{(sidebar && (
								<div className="hamburger_container">
									<svg
										onClick={() => setsidebar(false)}
										width="15"
										height="15"
										viewBox="0 0 11 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="11.1567"
											y="10.4498"
											width="1"
											height="15"
											rx="0.5"
											transform="rotate(135 11.1567 10.4498)"
											fill="black"
										/>
										<rect
											x="11.1567"
											y="0.550262"
											width="15"
											height="1"
											rx="0.5"
											transform="rotate(135 11.1567 0.550262)"
											fill="black"
										/>
									</svg>
								</div>
							)) || (
								<div
									onClick={() => setsidebar(true)}
									className="hamburger_container d-block d-lg-none"
								>
									<svg
										width="18"
										height="16"
										viewBox="0 0 16 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="16"
											y="5"
											width="1"
											height="16"
											rx="0.5"
											transform="rotate(90 16 5)"
											fill="#23262D"
										/>
										<rect
											x="16"
											width="1"
											height="16"
											rx="0.5"
											transform="rotate(90 16 0)"
											fill="#23262D"
										/>
										<rect
											x="16"
											y="10"
											width="1"
											height="16"
											rx="0.5"
											transform="rotate(90 16 10)"
											fill="#23262D"
										/>
									</svg>
								</div>
							)}

							{/* <!-- HAMBURGER END --> */}
							<div className="d-none d-lg-block">
								<ul className="list-unstyled d-inline-flex align-items-center mb-0 textS">
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

						{/* {window.scrollY === 0 && (
							<hr
								style={{ opacity: "1" }}
								className="bg-dark mt-4 mb-0 hrHeader"
							/>
						)} */}

						{sidebar && <hr style={{ opacity: "1" }} className="mt-4 mb-0" />}

						{/* SIDEBAR START */}
						<div
							style={{
								height: (sidebar && "160px") || "0px",
								background: (sidebar && "#fff") || "",
								paddingTop: (sidebar && "1rem") || "0rem",
								overflow: "hidden",
							}}
							className="SideBarContainer"
						>
							<ul className="list-unstyled text-center">
								<li className="pt-2">
									<Link
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										className="text-dark text-decoration-none textS"
										onClick={() => setsidebar(false)}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="about"
										smooth={true}
										duration={500}
										offset={-40}
										spy={true}
										className="text-dark text-decoration-none textS"
										onClick={() => setsidebar(false)}
									>
										About
									</Link>
								</li>
								<li>
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

						{/* SIDEBAR END */}
					</div>
				</div>
			</div>

			<div className="px-3 d-block d-md-none">
				<hr style={{ opacity: "1", marginTop: "4rem" }} className="mb-0" />
			</div>
			{/* PINNED HEADER MOBILE END */}
		</>
	);
};

export default Header;
