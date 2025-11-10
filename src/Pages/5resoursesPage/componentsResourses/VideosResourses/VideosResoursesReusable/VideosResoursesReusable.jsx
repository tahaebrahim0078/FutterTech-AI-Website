import "./VideosResoursesReusable.css";
import PropTypes from "prop-types";

// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";

export default function VideosResoursesReusable({
  VideoResourseIcon,
  titleLeftResoursesVid,
  subTitleLeftResoursesVid,
  VideoResourseimg,
  RightTitleResoursesVid,
  subRightTitleResoursesVid,
  TitleCardONEvidResourseRight,
  DateCardONEvidResourseRight,
  TitleCardTOWvidResourseRight,
  DateCardTOWvidResourseRight,
  TitleCardTHREEvidResourseRight,
  DateCardTHREEvidResourseRight,
}) {
  return (
    <section className="VideosResoursesReusable">
      <div className="MainVideosResoursesReusable">
        <div className="leftVideosResoursesReusable">
          <img
            src={`/src/icons/${VideoResourseIcon}.png`}
            alt={`${VideoResourseIcon} icon`}
          />
          <h1>{titleLeftResoursesVid}</h1>
          <p>{subTitleLeftResoursesVid}</p>
        </div>

        <div className="RightVideosResoursesReusable">
          <div className="RightVideosResoursesReusableImg">
            <img
              src={`/src/icons/${VideoResourseimg}.png`}
              alt={`${VideoResourseimg} image`}
            />
          </div>
          <div className="RightVideosResoursesReusableTitleAndBtn">
            <div className="TypsRightVideosResoursesReusable">
              <h1>{RightTitleResoursesVid}</h1>
              <p>{subRightTitleResoursesVid}</p>
            </div>
            <div className="BtnRightVideosResoursesReusable">
              <a href="">
                <button>
                  Download PDF Now
                  <img src={ArooIcon} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="CardsRightVideosResoursesReusable">
            <div className="CardsRightVideosResoursesReusable_CARD">
              <p>{TitleCardONEvidResourseRight}</p>
              <h1>{DateCardONEvidResourseRight}</h1>
            </div>
            <div className="CardsRightVideosResoursesReusable_CARD">
              <p>{TitleCardTOWvidResourseRight}</p>
              <h1>{DateCardTOWvidResourseRight}</h1>
            </div>
            <div className="CardsRightVideosResoursesReusable_CARD">
              <p>{TitleCardTHREEvidResourseRight}</p>
              <h1>{DateCardTHREEvidResourseRight}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Define propTypes
VideosResoursesReusable.propTypes = {
  VideoResourseIcon: PropTypes.string.isRequired,
  titleLeftResoursesVid: PropTypes.string.isRequired, // Ensure this matches exactly
  subTitleLeftResoursesVid: PropTypes.string.isRequired,
  VideoResourseimg: PropTypes.string.isRequired,
  RightTitleResoursesVid: PropTypes.string.isRequired,
  subRightTitleResoursesVid: PropTypes.string.isRequired,
  TitleCardONEvidResourseRight: PropTypes.string.isRequired,
  DateCardONEvidResourseRight: PropTypes.string.isRequired,
  TitleCardTOWvidResourseRight: PropTypes.string.isRequired,
  DateCardTOWvidResourseRight: PropTypes.string.isRequired,
  TitleCardTHREEvidResourseRight: PropTypes.string.isRequired,
  DateCardTHREEvidResourseRight: PropTypes.string.isRequired,
};

// Default Props (if needed)
