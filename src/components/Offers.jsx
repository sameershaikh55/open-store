import React from "react";

// IMPORTING IMAGES
import illo1 from "../assets/illo-1day.svg";
import illo2 from "../assets/illo-cash.svg";
import illo3 from "../assets/illo-dream.svg";

const Offers = () => {
  const data = [
    {
      title: "Get an offer in 1 day",
      desc: "Skip the long process and expensive fees. It’s free and easy to find out the value of your business.",
      img: illo1,
    },
    {
      title: "Cash out on your schedule",
      desc: "Walk away with the money you earned in days, not months. Our technology does the heavy-lifting for you.",
      img: illo2,
    },
    {
      title: "Pursue your next dream",
      desc: "Get paid for the hard work you put into your business and be free to focus on what’s next.",
      img: illo3,
    },
  ];

  return (
    <div className="page_container2">
      <div className="container-fluid">
        {/* HERO START */}
        <div className="row">
          <div className="col-11 col-sm-12 mx-auto">
            {/* THREE TABS START */}
            <div className="row gx-5 px-2">
              {data.map((prev, i) => {
                return (
                  <div
                    key={i}
                    className="col-4 offer_card d-flex align-items-start"
                  >
                    <div>
                      <h5 className="fw-bold lh-base h4 mb-4">{prev.title}</h5>
                      <p className="lightColor lh-base small">{prev.desc}</p>
                      <img src={prev.img} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* THREE TABS END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
