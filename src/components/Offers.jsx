import React from "react";

// IMPORTING IMAGES
import illo1 from "../assets/illo-1day.svg";
import illo2 from "../assets/illo-cash.svg";
import illo3 from "../assets/illo-dream.svg";

const Offers = () => {
	const data = [
		{
			title: (
				<h5 className="textG lh-base h4 mb-3 mb-md-4">
					Get an offer <br className="d-none d-md-block" /> in 1 day
				</h5>
			),
			desc: "Skip the long process and expensive fees. It’s free and easy to find out the value of your business.",
			img: illo1,
		},
		{
			title: (
				<h5 className="textG lh-base h4 mb-3 mb-md-4">
					Cash out on <br className="d-none d-md-block" /> your schedule
				</h5>
			),
			desc: "Walk away with the money you earned in days, not months. Our technology does the heavy-lifting for you.",
			img: illo2,
		},
		{
			title: (
				<h5 className="textG lh-base h4 mb-3 mb-md-4">
					Pursue your <br className="d-none d-md-block" /> next dream
				</h5>
			),
			desc: "Get paid for the hard work you put into your business and be free to focus on what’s next.",
			img: illo3,
		},
	];

	return (
		<div className="offer_section page_container">
			<div className="container-fluid">
				{/* HERO START */}
				<div className="row">
					<div className="col-11 col-sm-12 mx-auto">
						{/* THREE TABS START */}
						<div className="row gx-5 px-2">
							{data.map((prev, i) => {
								return (
									<div
										key={i}
										className="col-12 col-md-4 offer_card d-flex align-items-start"
									>
										<div className="row">
											<div className="col-9 col-md-12 pe-0">
												{prev.title}
												<p className="lightColor textS">{prev.desc}</p>
											</div>
											<div className="col-3 col-md-8 text-center text-md-start">
												<img src={prev.img} alt="" />
											</div>
										</div>
									</div>
								);
							})}
						</div>
						{/* THREE TABS END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offers;
