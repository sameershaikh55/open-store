import React from "react";

// IMPORTING IMAGES
import { BsArrowRight } from "react-icons/bs";

// IMPORTING IMAGES
import leave1 from "../assets/leave1.PNG";
import leave2 from "../assets/leave2.svg";
import leave3 from "../assets/leave3.PNG";
import leave4 from "../assets/leave4.svg";
import leave5 from "../assets/leave5.svg";

const GoodHands = () => {
	const data = [leave1, leave2, leave3, leave4, leave5];
	return (
		<div className="good_hands_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-lg-7 mx-auto mx-sm-0 me-sm-auto">
							<h3 className="fw-bold">Leave your business in good hands.</h3>
							<p className="firstP lightColor mb-0">
								We’re a proven group of e-commerce experts and operators who
								have teamed up with the early investors and founders of some of
								the biggest names in the industry.
							</p>

							<div className="leave_brand_container d-flex justify-content-between align-items-center flex-wrap">
								{data.map((prev, i) => {
									return (
										<img className="leave_img" key={i} src={prev} alt={prev} />
									);
								})}
							</div>

							<p className="lightColor">
								OpenStore’s unique approach combines our seasoned expertise in
								e-commerce with the best of data science and machine learning.
								We’re investing in the future of e-commerce, and we believe that
								future begins with founders ambitious enough to build it — you.
							</p>

							<div className="mt-5">
								<button className="bg-transparent border-0">
									<a
										className="fw-bold text-decoration-none purpleColor"
										href=""
									>
										Join our family of founders <BsArrowRight />
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoodHands;
