import React from "react";

// IMPORTING IMAGES
import { BsArrowRight } from "react-icons/bs";

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
			desc: "Our pricing and operating technology enables us to buy businesses others might not.",
		},
		{
			title: "We’ll never sell your data",
			desc: "Any data you share with us will only be used for accurate business valuations.",
		},
	];
	return (
		<div className="approach_container">
			<div className="page_container">
				<div className="container-fluid">
					<h3>Our Approach</h3>
					<div className="row px-2">
						{data.map((prev, i) => {
							return (
								<div
									key={i}
									className="col-12 col-sm-6 approach_card d-flex align-items-center"
								>
									<div className="box"></div>
									<div className="ms-3">
										<h6 className="fw-bold mb-1">{prev.title}</h6>
										<p className="lightColor mb-0">{prev.desc}</p>
									</div>
								</div>
							);
						})}
					</div>

					<div className="bottom_link">
						<a href="" className="fw-bold purpleColor text-decoration-none">
							Find out if your business is a fit <BsArrowRight />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurApproach;
