import React from "react";

// Import slider
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<div className="testimonials_container">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="text-center fw-bold">Testimonials</h2>

					<div className="row mt-4">
						<div className="col-md-12">
							<Slider {...settings}>
								<div className="testimonial_card d-flex flex-column justify-content-between">
									<div>
										<div className="person_placeholder mx-auto"></div>
										<p className="mt-3">
											OpenStore
											<strong>
												brought a level of professionalism to the table that was
												a breath of fresh air
											</strong>
											and we look forward to working with everyone more in the
											near future!
										</p>
									</div>
									<p className="mb-0">
										<small>
											Ecommerce founder in the children’s apparel space
										</small>
									</p>
								</div>
								<div className="testimonial_card d-flex flex-column justify-content-between">
									<div>
										<div className="person_placeholder mx-auto"></div>
										<p className="mt-3">
											I think everything was great. It was very apparent that
											you guys had prepared well and were very professional.
											Really loved the tips you gave us even though no offer was
											made. It showed the <strong>diligence</strong> you all did
											looking into our data.
										</p>
									</div>
									<p className="mb-0">
										<small>Ecommerce founder in the swimwear space</small>
									</p>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
