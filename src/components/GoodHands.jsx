import React from "react";

// IMPORTING IMAGES
import leave1 from "../assets/leave1.svg";
import leave2 from "../assets/leave2.svg";
import leave3 from "../assets/leave3.svg";
import leave4 from "../assets/leave4.svg";
import leave5 from "../assets/leave5.svg";
import hand from "../assets/illo-hands.svg";
import brandMobile from "../assets/brandMobile.svg";

const GoodHands = () => {
	const data = [leave1, leave2, leave3, leave4, leave5];
	return (
		<div className="good_hands_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-8 mx-auto mx-sm-0 me-sm-auto">
							<h3 className="textG">
								Leave your business in the right
								<br className="d-none d-md-block" /> hands
							</h3>
							<p className="firstP textS">
								We’re a proven group of e-commerce experts and operators who
								have teamed up with the founders and investors of some of the
								biggest names in the industry.
							</p>
							<div className="leave_brand_container d-none d-md-flex justify-content-center justify-content-md-between align-items-center flex-wrap">
								{data.map((prev, i) => {
									return (
										<img className="leave_img" key={i} src={prev} alt={prev} />
									);
								})}
							</div>
							<div className="text-center mb-5">
								<img src={brandMobile} alt="brandMobile" />
							</div>
						</div>
						<div className="col-9 col-lg-4 mx-auto ps-0">
							<img className="w-100" src={hand} alt="hand" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoodHands;
