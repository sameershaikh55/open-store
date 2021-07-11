import React from "react";

const GetPaid = () => {
	const data = [
		<h5 className="fw-bold">
			Answer a short form, <br /> automate the rest
		</h5>,
		<h5 className="fw-bold">
			Receive your offer <br /> within a day
		</h5>,
		<h5 className="fw-bold">
			Close in days, <br /> not months
		</h5>,
	];
	return (
		<div className="getPaid_container">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="text-center fw-bold pt-5">
						Get paid in 3 easy steps.
					</h2>
					<div className="col-12">
						<div className="row">
							{data.map((prev, i) => {
								return (
									<div key={i} className={`col-12 col-sm-4 text-center mt-5`}>
										<div className="mx-auto">
											<p className="purpleColor">{i + 1}</p>
											{prev}
										</div>
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
