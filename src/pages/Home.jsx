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
import PinnedFooter from "../components/PinnedFooter";

const Home = () => {
	return (
		<div>
			<div className="upper_section_mobile">
				<Header />
				<Hero />
				<Offers />
			</div>
			<div id="about" className="middle_section">
				<GoodHands />
				<OurApproach />
			</div>
			<GetPaid />
			<div className="pb-0 pb-md-5 pb-md-0 upper_section_mobile">
				<StackUp />
			</div>
			<Testimonials />
			<Faq />
			<PinnedFooter />
		</div>
	);
};

export default Home;
