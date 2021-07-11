import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTING ICONS
import { ImCross } from "react-icons/im";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross
				onClick={ClickEvent}
				className="CrossBTn"
				color="rgba(131, 136, 150, 0.5)"
			/>
			<ul className="list-unstyled">
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/"
					>
						Jobs
					</NavLink>
				</li>
				<li>
					<button className="px-3 bg-transparent mb-0 rounded-3 border border-2 border-dark">
						<NavLink className="text-decoration-none text-dark" to="">
							Get My Free Offer
						</NavLink>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
