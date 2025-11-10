import "./sccondMainHomeCop.css";
import PropTypes from "prop-types";

export default function SccondMainHomeCop({
  SecondHomeImg,
  SecondHomeTitle,
  SecondHomeSubTitle,
  SecondHomeCardTitle1,
  SecondHomeCardSubTitle1,
  SecondHomeCardTitle2,
  SecondHomeCardSubTitle2,
  SecondHomeCardTitle3,
  SecondHomeCardSubTitle3,
  SecondHomeCardTitle4,
  SecondHomeCardSubTitle4,
}) {
  //   const dataHomeScnd = [
  //     {
  //       title: "Quantity",
  //       paragragh:
  //         "Over 1,000 articles on emerging tech trends and breakthroughs.",
  //     },
  //     {
  //       title: "Variety",
  //       paragragh:
  //         "Articles cover fields like AI, robotics, biotechnology, and more.",
  //     },
  //     {
  //       title: "Frequency",
  //       paragragh: "Fresh content added daily to keep you up to date.",
  //     },
  //     {
  //       title: "Authoritative",
  //       paragragh:
  //         "Written by our team of tech experts and industry professionals.",
  //     },
  //   ];

  /////////////////////////////////////
  // for using data and loop on it
  ////////////////////////////////////

  return (
    <div className="TopMainScnd">
      <div className="SecondHome">
        <div className="leftSecond">
          <img src={`src/icons/${SecondHomeImg}.png`} alt="" />
          <h1>{SecondHomeTitle}</h1>
          <p>{SecondHomeSubTitle}</p>
        </div>

        <div className="rightSecond">
          <div className="TopCardSdndHome">
            <div className="cardSecnd1">
              <h1>{SecondHomeCardTitle1}</h1>
              <p>{SecondHomeCardSubTitle1}</p>
            </div>
            <div className="cardSecnd2">
              <h1>{SecondHomeCardTitle2}</h1>
              <p>{SecondHomeCardSubTitle2}</p>
            </div>
          </div>

          <div className="DownCardSdndHome">
            <div className="cardSecnd3">
              <h1>{SecondHomeCardTitle3}</h1>
              <p>{SecondHomeCardSubTitle3}</p>
            </div>
            <div className="cardSecnd4">
              <h1>{SecondHomeCardTitle4}</h1>
              <p>{SecondHomeCardSubTitle4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SccondMainHomeCop.propTypes = {
  SecondHomeImg: PropTypes.string.isRequired,
  SecondHomeTitle: PropTypes.string.isRequired, // Ensure this matches exactly
  SecondHomeSubTitle: PropTypes.string.isRequired,
  SecondHomeCardTitle1: PropTypes.string.isRequired,

  SecondHomeCardSubTitle1: PropTypes.string.isRequired,
  SecondHomeCardTitle2: PropTypes.string.isRequired,
  SecondHomeCardSubTitle2: PropTypes.string.isRequired,
  SecondHomeCardTitle3: PropTypes.string.isRequired,
  SecondHomeCardSubTitle3: PropTypes.string.isRequired,
  SecondHomeCardTitle4: PropTypes.string.isRequired,
  SecondHomeCardSubTitle4: PropTypes.string.isRequired,
 
};
