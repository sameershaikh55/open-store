import React from "react";

const GetPaid = () => {
	const data = [
		<p className="head_color interFont">
			Answer a short form & <br /> automate the rest.
		</p>,
		<p className="head_color interFont">
			Get your offer within <br /> 24 hours.
		</p>,
		<p className="head_color interFont">
			Close in days, not <br /> months.
		</p>,
	];
	return (
		<div className="getPaid_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h2 className="text-center textG">
								Sell your business in 3 easy steps
							</h2>
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div key={i} className={`col-10 col-sm-4 mt-5 mx-auto`}>
											<div className="mx-auto">
												<h3 className="mb-4 purpleColor textS">{i + 1}</h3>
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
		</div>
	);
};

export default GetPaid;
