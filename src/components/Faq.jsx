import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// IMPORTING IMAGES
import { BiRightArrowAlt } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
		fontWeight: 500,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

export default function Faq() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid px-3">
					<h2 className="mb-4 mb-md-5 textG text-left text-md-center head_color">
						FAQ
					</h2>
					<div className="row">
						<div className="col-12 col-md-7">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={handleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography className={classes.heading}>
										How do you create a price for my business?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Our pricing engine automatically builds an offer for your
										business by analyzing its customer health, profitability,
										and recent growth.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel2bh-content"
									id="panel2bh-header"
								>
									<Typography className={classes.heading}>
										How do you use the data I provide?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										We’re committed to using your business data for pricing
										purposes only. We don’t share or sell your data.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={handleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel3bh-content"
									id="panel3bh-header"
								>
									<Typography className={classes.heading}>
										How long does the process take?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										After you submit the info that OpenStore uses to build an
										offer for your business, you can expect a price within 24
										hours.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={handleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel4bh-content"
									id="panel4bh-header"
								>
									<Typography className={classes.heading}>
										Am I committing to anything?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										No. OpenStore’s pricing process is free and without any
										obligation. It is an opportunity to explore what your
										business is worth.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
						<div className="col-12 col-sm-8 col-md-5 col-lg-4 my-4">
							<div className="row">
								<div className="col-12 col-lg-9 mx-auto">
									<p className="lightColor lh-lg textS mx-auto">
										Need help? Feel free to reach out to our team to walk you
										through the process and answer any questions you might have.
									</p>

									<div className="bottom_link mt-4 mx-auto">
										<a
											href="mailto:hello@open.store"
											target="blank"
											className="fw-bold purpleColor text-decoration-none textS"
										>
											Reach out to our team
											<BiRightArrowAlt fontSize="1.2rem" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
