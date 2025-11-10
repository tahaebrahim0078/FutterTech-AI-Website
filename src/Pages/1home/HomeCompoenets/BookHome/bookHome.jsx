import "./bookHome.css";
// @ts-ignore

import ArooIcon from "/src/icons/ArooIcon.png";

// @ts-ignore
import eye from "/src/icons/eye.png";

export default function bookHome({
  LeftIconMain,
  TitleLeft,
  SubtitleLeft,
  btnLeft,
  UsersLeft,
  iconsBtnLeft1,
  iconsBtnLeft2,
  iconsBtnLeft3,
  iconsBtnLeft4,
  TitleRight,
  SubTitleRight,
  MainImageRight,
  btnTextLeftRight,
  btnTextRightRight,
  TextBotRight,
  BorderBotBook,
}) {
  return (
    <section
      style={{ borderBottom: BorderBotBook ? "1px solid #262626" : null }}
      className="MainBook"
    >
      <div className="MainMainBook">
      <div className="leftBook">
        <div className="topLeftBook">
          <img  src={`/src/icons/${LeftIconMain}.png`} alt="" />
          <h1>{TitleLeft}</h1>
          <p>{SubtitleLeft}</p>
          <a href="">
            <button className="LeftBookBtn">
              {btnLeft} <img src={ArooIcon} alt="" />
            </button>
          </a>
        </div>

        <div className="botLeftBook">
          <div className="botLeftBookTexts">
            <p>Downloaded By</p>
            <h1>{UsersLeft}</h1>
          </div>
          <div className="botLeftBookimages">
            <img
              className="bookImgRaduis1"
              src={`/src/icons/${iconsBtnLeft1}.png`}
              alt=""
            />
            <img
              className="bookImgRaduis2"
              src={`/src/icons/${iconsBtnLeft2}.png`}
              alt=""
            />

            <img
              className="bookImgRaduis3"
              src={`/src/icons/${iconsBtnLeft3}.png`}
              alt=""
            />

            <img
              className="bookImgRaduis4"
              src={`/src/icons/${iconsBtnLeft4}.png`}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="rightBook">
        <div className="rightBookTexts">
          <h1>{TitleRight}</h1>
          <p>{SubTitleRight}</p>
        </div>

        <div className="rightBookImages">
          <img src={`/src/icons/${MainImageRight}.png`} alt="" />
        </div>

        <div className="rightBookBtn">

          
          <div className="rightBookBtnLeft">
            <p>Total Ebooks</p>
            <h1>{btnTextLeftRight}</h1>
          </div>
          <div className="rightBookBtnRight">
            <div className="rightBookBtnRightTexts">
              <p>Download Formats</p>
              <h1>{btnTextRightRight}</h1>
            </div>
            <a href="">
              <button className="RightBookBtn">
                Preview <img src={eye} alt="" />
              </button>
            </a>
          </div>
        </div>

        <div className="rightBookBot">
          <p>Average Author Expertise</p>
          <h1>{TextBotRight}</h1>
        </div>
      </div>
      </div>
    </section>
  );
}
