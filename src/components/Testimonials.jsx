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
				breakpoint: 768,
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
					<h2 className="text-center textG mb-4 mb-md-5 head_color">
						Testimonials
					</h2>

					<div className="row mt-4">
						<div className="col-md-12">
							<Slider {...settings}>
								<div className="testimonial_card d-flex flex-column justify-content-between">
									<div>
										<p className="testiText head_color textS">
											OpenStore brought a level of{" "}
											<strong>professionalism</strong> to the table that was{" "}
											<strong>a breath of fresh air</strong> and we look forward
											to working with everyone more in the near future!
										</p>
									</div>
									<p className="testiUnder mb-0 underHead_color">
										<small>
											E-commerce founder in the children’s apparel space
										</small>
									</p>
								</div>
								<div className="testimonial_card d-flex flex-column justify-content-between">
									<div>
										<p className="testiText head_color textS">
											I think everything was great. It was very apparent that
											you guys had prepared well and were very professional.
											Really loved the tips you gave us even though no offer was
											made. It showed the <strong>diligence</strong> you all did
											looking into our data.
										</p>
									</div>
									<p className="testiUnder mb-0 underHead_color">
										<small>E-commerce founder in the swimwear space</small>
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
