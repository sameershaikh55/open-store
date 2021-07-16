import React from "react";

// IMPORTING ICONS
import cross from "../assets/cross.svg";
import check from "../assets/check.svg";

const StackUp = () => {
	return (
		<div className="stackUp_container">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="text-center fw-bold mb-4">See how we stack up</h2>
					<div className="row">
						<div className="col-11 col-md-6 mx-auto">
							<p className="text-center">
								We’re a team of founders and builders who have grown our own
								e-commerce businesses and are committed to looking after yours.
							</p>
						</div>
					</div>

					<div className="box_container row justify-content-around">
						<div className="row">
							<div className="upperStackSection col-12 col-md-6 order-1 order-md-0">
								<div className="stackSection stack2 mx-auto">
									<h5 className="mt-3 head_color fw-bold">
										Traditional Brokers
									</h5>
									<hr className="my-4" />
									<div>
										<div className="mt-3 d-flex align-items-center">
											<img src={cross} alt="cross" />
											<p className="d-none d-md-block mb-0 ms-3">
												Takes 3–6 months if you can find a buyer, with
												uncertainty when it will close.
											</p>
											<p className="d-block d-md-none mb-0 ms-3">
												Get an offer within 24 hours and close quickly after
												accepting.
											</p>
										</div>
										<div className="mt-3 d-flex align-items-center">
											<img src={cross} alt="cross" />
											<p className="mb-0 ms-3">
												Brokers take 10% of your business.
											</p>
										</div>
										<div className="mt-3 d-flex align-items-center">
											<img src={cross} alt="cross" />
											<p className="mb-0 ms-3">
												You’re locked into the business for long earnouts.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="stackSection stack1 mx-auto">
									<h5 className="mt-3 head_color fw-bold">OpenStore</h5>
									<hr className="my-4" />
									<div>
										<div className="mt-3 d-flex align-items-center">
											<img src={check} alt="cross" />
											<p className="mb-0 ms-3">
												Get an offer <strong>within 24 hours</strong> and close
												quickly after accepting.
											</p>
										</div>
										<div className="mt-3 d-flex align-items-center">
											<img src={check} alt="cross" />
											<p className="mb-0 ms-3">
												<strong>Get paid</strong> and cut out the middleman.
											</p>
										</div>
										<div className="mt-3 d-flex align-items-center">
											<img src={check} alt="cross" />
											<p className="mb-0 ms-3">
												<strong>You’re free</strong> to pursue what’s next.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* NEWSLETTER START */}
					<div className="row news_letter_cont">
						<div className="col-7 mx-auto">
							<div className="newsletter_container2 row px-3">
								<div className="col-12 col-sm-9">
									<div className="inp_container position-relative">
										<input
											type="text"
											className="w-100 rounded-3 border-0"
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
