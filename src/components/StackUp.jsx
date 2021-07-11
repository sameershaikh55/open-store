import React from "react";

// IMPORTING ICONS
import cross from "../assets/cross.svg";
import check from "../assets/check.svg";
import { BiRightArrowAlt } from "react-icons/bi";

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
									<div className="box"></div>
									<h4 className="text-center mt-3">Traditional Brokers</h4>
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
									<div className="box"></div>
									<h4 className="text-center mt-3">OpenStore</h4>

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

									<button className="d-none d-md-block mt-5 w-100 border-0 rounded-3 text-white mb-0">
										Get Your Free Offer <BiRightArrowAlt fontSize="1.4rem" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StackUp;
