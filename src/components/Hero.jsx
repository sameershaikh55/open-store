import React from "react";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container2">
				<div className="container-fluid text-center">
					{/* HERO START */}
					<div className="row">
						<div className="col-11 col-sm-12 mx-auto">
							<h1 className="display-4 mb-2">Get money for what’s next</h1>
							<p className="d-none d-md-block lightColor">
								Sell your e-commerce business to OpenStore. It’s fast and easy.
							</p>
							<p className="d-block d-md-none lightColor">
								We buy direct-to-consumer brands from founders looking for a
								reliable exit.
							</p>

							{/* NEWSLETTER START */}
							<div className="newsletter_container row px-3">
								<div className="col-12 col-sm-8">
									<div className="inp_container position-relative">
										<input
											type="text"
											className="w-100 rounded-3"
											placeholder="Enter your store website"
										/>
										<h6>http://</h6>
									</div>
								</div>
								<div className="col-12 col-sm-4 mt-3 mt-sm-0 ps-2 ps-sm-0">
									<button className="searchBtn w-100 text-white border-0">
										Get My Free Offer
									</button>
								</div>
							</div>
							{/* NEWSLETTER END */}
						</div>
					</div>
					{/* HERO END */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
