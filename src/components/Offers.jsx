import React from "react";

const Offers = () => {
	const data = [
		{
			title: "Get an offer in 1 day",
			desc: "Skip the long process and expensive fees. It’s free and easy to find out the value of your business.",
		},
		{
			title: "Cash out on your schedule",
			desc: "Walk away with the money you earned in days, not months. Our technology does the heavy-lifting for you.",
		},
		{
			title: "Pursue your next dream",
			desc: "Get paid for the hard work you put into your business and be free to focus on what’s next.",
		},
	];

	return (
		<div className="page_container2">
			<div className="container-fluid">
				{/* HERO START */}
				<div className="row">
					<div className="col-11 col-sm-12 mx-auto">
						{/* THREE TABS START */}
						<div className="row px-2">
							{data.map((prev, i) => {
								return (
									<div
										key={i}
										className="col-12 offer_card d-flex align-items-center"
									>
										<div className="img_placeholder"></div>
										<div className="ms-4">
											<h5 className="fw-bold mb-2">{prev.title}</h5>
											<p className="lightColor">{prev.desc}</p>
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
