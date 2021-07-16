import React from "react";

// IMPORTING IMAGES
import illustration from "../assets/underHero.svg";

const Hero = () => {
  return (
		<>
			<div className="hero_container">
				<div className="page_container2">
					<div className="container-fluid text-center">
						{/* HERO START */}
						<div className="row">
							<div className="col-12 col-sm-12 mx-auto">
								<h1 className="display-4 mb-2 themeColor textG">
									Get money for <br /> what’s next
								</h1>
								<p className="d-none d-md-block textS under_head">
									Sell your e-commerce business to OpenStore. It’s fast and
									easy.
								</p>
								<p className="d-block d-md-none textS under_head">
									We buy direct-to-consumer brands from founders looking for a
									reliable exit.
								</p>

								{/* NEWSLETTER START */}
								<div className="newsletter_container row px-3">
									<div className="col-12 col-sm-9">
										<div className="inp_container position-relative">
											<input
												type="text"
												className="w-100 rounded-3 border-0"
												placeholder="Enter your store website"
											/>
											<h6 className="themeColor">http://</h6>
										</div>
									</div>
									<div className="col-12 col-sm-3 mt-3 mt-sm-0 ps-2 ps-sm-0">
										<button className="searchBtn small mb-0 w-100 text-white border-0">
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

			{/* HERO ILLUSTRATION SECTION START */}
			<div className="page_container">
				<div className="container-fluid px-0 px-md-4">
					<img className="w-100" src={illustration} alt="illustration" />
					<hr style={{ height: "3px" }} className="mt-0" />
				</div>
			</div>
			{/* HERO ILLUSTRATION SECTION END */}
		</>
	);
};

export default Hero;
