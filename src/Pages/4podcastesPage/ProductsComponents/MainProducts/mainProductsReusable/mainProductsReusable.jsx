import PropTypes from "prop-types";
import "./mainProductsReusable.css";
// @ts-ignore
import StarRated from "/src/icons/StarRated.png";
// @ts-ignore

import ArooIcon from "/src/icons/ArooIcon.png";

// @ts-ignore
import pushVideo from "/src/icons/pushVideo.png";

export default function mainProductsReusable({
  productIcons,
  TitleProductLeft,
  CardLeftTitle,
  CardLeftSubtilte,
  productImgs,
  TitleRightProduct,
  SubTitleRightProduct,
  CardProductRightTitle1,
  CardProductRightTitle2,
  CardProductRightTitle3,
  CardProductRight_SUP_Title1,
  CardProductRight_SUP_Title2,
  CardProductRight_SUP_Title3,
  borderProduct,
}) {
  return (
    <section
      style={{ borderBottom: borderProduct ? "1px solid #242424" : null }}
      className="mainProductsReusable"
    >
      <div className="MainLeftAndRight">
        <div className="leftMainProducts">
          <img
            className="productIcon"
            src={`/src/icons/${productIcons}.png`}
            alt=""
          />
          <div className="titleAndStars">
            <h1>{TitleProductLeft}</h1>
            <div className="StarsProducts">
              <img src={StarRated} alt="" />
              <img src={StarRated} alt="" />

              <img src={StarRated} alt="" />

              <img src={StarRated} alt="" />

              <img src={StarRated} alt="" />
            </div>
          </div>
          <div className="cardLeftProduct">
            <div className="cardLeftProductTitle">
              <p>{CardLeftTitle}</p>
              <h1>{CardLeftSubtilte}</h1>
            </div>
            <a className="btnProductLeft" href="">
              <button>
                Listen Podcast <img src={ArooIcon} alt="" />
              </button>
            </a>
          </div>
        </div>

        <div className="rightMainProducts">
          <div className="MainImgRightProducts">
            <img
              className="ImgMainProduct"
              src={`/src/icons/${productImgs}.png`}
              alt=""
            />
            <img className="BTN_ImgMainProduct" src={pushVideo} alt="" />
          </div>

          <div className="TypsRightProduct">
            <h1>{TitleRightProduct}</h1>
            <p>{SubTitleRightProduct}</p>
          </div>
          <div className="MainContainer_cardRightProduct">
            <div className="cardRightProduct">
              <div className="singlCardsRightProducts">
                <p>{CardProductRightTitle1}</p>
                <h1>{CardProductRight_SUP_Title1}</h1>
              </div>
              <div className="singlCardsRightProducts">
                <p>{CardProductRightTitle2}</p>
                <h1>{CardProductRight_SUP_Title2}</h1>
              </div>
              <div className="singlCardsRightProducts">
                <p>{CardProductRightTitle3}</p>
                <h1>{CardProductRight_SUP_Title3}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

mainProductsReusable.propTypes = {
  productIcons: PropTypes.string.isRequired,
  TitleProductLeft: PropTypes.string.isRequired,
  CardLeftTitle: PropTypes.string.isRequired,
  CardLeftSubtilte: PropTypes.string.isRequired,
  productImgs: PropTypes.string.isRequired,
  TitleRightProduct: PropTypes.string.isRequired,
  SubTitleRightProduct: PropTypes.string.isRequired,
  CardProductRightTitle1: PropTypes.string.isRequired,
  CardProductRight_SUP_Title1: PropTypes.string.isRequired,
  CardProductRightTitle2: PropTypes.string.isRequired,
  CardProductRight_SUP_Title2: PropTypes.string.isRequired,
  CardProductRightTitle3: PropTypes.string.isRequired,
  CardProductRight_SUP_Title3: PropTypes.string.isRequired,
  borderProduct: PropTypes.bool,
};
