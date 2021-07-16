import React from "react";

const GetPaid = () => {
	const data = [
		<p className="head_color">
			Answer a short form & <br /> automate the rest.
		</p>,
		<p className="head_color">Get your offer within 24 hours.</p>,
		<p className="head_color">
			Close in days, not <br /> months.
		</p>,
	];
	return (
		<div className="getPaid_container">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="text-center fw-bold">
						Sell your business in 3 easy steps
					</h2>
					<div className="col-12">
						<div className="row">
							{data.map((prev, i) => {
								return (
									<div key={i} className={`col-12 col-sm-4 mt-5`}>
										<div className="mx-auto">
											<h3 className="mb-4 purpleColor">{i + 1}</h3>
											{prev}
										</div>
										<hr />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetPaid;
