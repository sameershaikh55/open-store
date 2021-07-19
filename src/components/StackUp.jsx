import React from "react";

// IMPORTING ICONS
import cross from "../assets/cross.svg";
import check from "../assets/check.svg";

const StackUp = () => {
	return (
		<div className="stackUp_container">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="text-center head_color mb-4 textG">
						See how we stack up
					</h2>
					<div className="row">
						<div className="col-11 col-md-6 mx-auto">
							<p className="text-center under_head textS head_color">
								We’re a team of founders and builders who have grown our own
								e-commerce businesses and are committed to looking after yours.
							</p>
						</div>
					</div>

					<div className="box_container row justify-content-around">
						<div className="upperStackSection col-12 col-md-6	">
							<div className="stackSection stack2 me-auto">
								<h5 className="mt-3 head_color textG">Traditional Brokers</h5>
								<hr />
								<div>
									<div className="mt-4 d-flex align-items-center">
										<img src={cross} alt="cross" />
										<p className="mb-0 ms-3 underHead_color textS">
											Takes 3–6 months if you can find a buyer, with uncertainty
											when it will close.
										</p>
									</div>
									<div className="mt-4 d-flex align-items-center">
										<img src={cross} alt="cross" />
										<p className="mb-0 ms-3 underHead_color textS">
											Brokers take 10% of your business.
										</p>
									</div>
									<div className="mt-4 d-flex align-items-center">
										<img src={cross} alt="cross" />
										<p className="mb-0 ms-3 underHead_color textS">
											You’re locked into the business for long earnouts.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="stackSection stack1 ms-auto">
								<h5 className="mt-3 head_color textG">OpenStore</h5>
								<hr />
								<div>
									<div className="mt-4 d-flex align-items-center">
										<img src={check} alt="cross" />
										<p className="mb-0 ms-3 head_color textS">
											Get an offer <strong> within 1 business day</strong> and
											close quickly after accepting.
										</p>
									</div>
									<div className="mt-4 d-flex align-items-center">
										<img src={check} alt="cross" />
										<p className="mb-0 ms-3 head_color textS">
											Get paid and <strong> cut out the middleman.</strong>
										</p>
									</div>
									<div className="mt-4 d-flex align-items-center">
										<img src={check} alt="cross" />
										<p className="mb-0 ms-3 head_color textS">
											<strong>You’re free</strong> to pursue what’s next.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* NEWSLETTER START */}
					<div className="row news_letter_cont">
						<div className="col-12 col-md-7 mx-auto">
							<div className="newsletter_container2 row px-3">
								<div className="col-12 col-sm-9">
									<div className="inp_container position-relative">
										<input
											type="text"
											className="w-100 border-0"
											placeholder="Enter your store website"
										/>
										<h6>http://</h6>
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

export default StackUp;
