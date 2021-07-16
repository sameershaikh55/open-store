import React from "react";

// IMPORTING IMAGES
import { BiRightArrowAlt } from "react-icons/bi";

const OurApproach = () => {
	const data = [
		{
			title: "Empowered by technology",
			desc: "Our proprietary pricing engine enables us to give offers within a day.",
		},
		{
			title: "Sustainable growth",
			desc: "Our team of direct-to-consumer experts continue to build up the value of your brand.",
		},
		{
			title: "Every business has potential",
			desc: "OpenStore’s pricing and operating technology lets us to buy businesses others might not.",
		},
		{
			title: "We’ll never sell your data",
			desc: "Any information you share with us will only be used for accurate business valuations.",
		},
	];
	return (
		<div className="approach_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h3 className="head_color textG">Our Approach</h3>
							<p className="under_head textS mt-3">
								We combine our seasoned expertise in e-commerce with the best of
								data science and machine learning. We’re investing in the future
								of e-commerce, and we believe that future begins with the
								founders ambitious enough to build it — you.
							</p>
							<div className="row px-2 px-md-0">
								{data.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 ps-0 ps-md-3 col-sm-6 approach_card d-flex"
										>
											<div>
												<h6 className="mb-2 head_color textG">{prev.title}</h6>
												<p className="underHead_color mb-0 textS">
													{prev.desc}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* NEWSLETTER START */}
					<h4 className="head_color textG text-center mt-5">
						Join our family of founders
					</h4>
					<div className="row mt-4 mt-md-5">
						<div className="col-12 col-md-7 mx-auto">
							<div className="newsletter_container2 row px-3">
								<div className="col-12 col-sm-9">
									<div className="inp_container position-relative">
										<input
											type="text"
											className="w-100 rounded-3 border-0"
											placeholder="Enter your store website"
										/>
										<h6 className="textS">http://</h6>
									</div>
								</div>
								<div className="col-12 col-sm-3 mt-3 mt-sm-0 ps-2 ps-sm-0">
									<button className="searchBtn small mb-0 w-100 text-white border-0">
										Get My Free Offer
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* NEWSLETTER END */}
				</div>
			</div>
		</div>
	);
};

export default OurApproach;
