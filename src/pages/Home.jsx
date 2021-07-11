import React from "react";
import Faq from "../components/Faq";
import GetPaid from "../components/GetPaid";
import GoodHands from "../components/GoodHands";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import OurApproach from "../components/OurApproach";
import StackUp from "../components/StackUp";
import Testimonials from "../components/Testimonials";

const Home = () => {
	return (
		<div>
			<div className="upper_section_mobile">
				<Header />
				<Hero />
				<Offers />
			</div>
			<GoodHands />
			<OurApproach />
			<div className="pb-5 pb-md-0 upper_section_mobile">
				<GetPaid />
				<StackUp />
				{/* <Testimonials /> */}
			</div>
			<Faq />
		</div>
	);
};

export default Home;
