import React, { useState } from "react";

import { BsArrowRightShort } from "react-icons/bs";

const PinnedFooter = () => {
  const [handleBtn, setHandleBtn] = useState(false);

  // FOR MOBILE NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
		var header = document.querySelector(".pinnedFooter");
		header.classList.toggle("sticky", window.scrollY > 300);
	});
	// FOR MOBILE NAVBAR SCROLLING EFFECT END

	return (
		<div className="pinnedFooter shadow bg-white p-3 px-3">
			{(handleBtn && (
				<div>
					{/* NEWSLETTER START */}
					<div className="newsletter_containerFooter w-100 d-flex align-items-center">
						<div className="inp_container position-relative">
							<input
								type="text"
								className="w-100 rounded-3"
								placeholder="Enter your store website"
							/>
							<h6 className="themeColor">http://</h6>
						</div>
						<div className="searchBtn_cont ms-2">
							<button className="searchBtn small mb-0 text-white border-0">
								<BsArrowRightShort fontSize="2rem" />
							</button>
						</div>
					</div>
					{/* NEWSLETTER END */}
				</div>
			)) || (
				<button
					onClick={() => setHandleBtn(true)}
					className="searchBtn w-100 py-2 border-0 text-white"
				>
					Get My Free Offer
				</button>
			)}
		</div>
	);
};

export default PinnedFooter;
