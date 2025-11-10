import "./cardsProductsVid.css";
// @ts-ignore

// @ts-ignore
import pushVideo from "/src/icons/pushVideo.png";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";
import React from "react";

export default function cardsProductsVid() {
  const CardDataProducts1 = [
    {
      imgCardProduct1: "CardProdcut1",
      timeVideo1: "2.30 min",
      titleCardProduct1: "AI in Healthcare",
      ParaCardProduct1:
        "Dr. Lisa Adams discusses how AI is revolutionizing healthcare  ,  from diagnostic tools to patient care. ",
    },
    {
      imgCardProduct1: "CardProdcut2",
      timeVideo1: "2.30 min",
      titleCardProduct1: "AI Ethics",
      ParaCardProduct1:
        "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner. ",
    },
    {
      imgCardProduct1: "CardProdcut3",
      timeVideo1: "2.30 min",
      titleCardProduct1: "Machine Learning Explained",
      ParaCardProduct1:
        "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode ",
    },
  ];
  const CardDataProducts2 = [
    {
      imgCardProduct2: "CardProdcut4",
      timeVideo2: "2.30 min",
      titleCardProduct2: "AI and the Future of Work",
      ParaCardProduct2:
        "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    },
    {
      imgCardProduct2: "bookimg1",
      timeVideo2: "2.30 min",
      titleCardProduct2: "AI in Education",
      ParaCardProduct2:
        "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience. ",
    },
    {
      imgCardProduct2: "CardProdcut5",
      timeVideo2: "2.30 min",
      titleCardProduct2: "AI in Entertainment",
      ParaCardProduct2:
        "David Smith as they explore the influence of AI in the entertainment industry.",
    },
  ];
  return (
    <section className="MainCardsProductsVid">
      <section className="ContainercardsProductsVid">
        <section className="cardsProductsVid">
          {CardDataProducts1.map((item, index) => (
            <React.Fragment key={item.titleCardProduct1}>
              <div className="MainCardProdcutVid">
                <div className="ImgCardsProductVit">
                  <img
                    className="imgCardProductVid"
                    src={`/src/icons/${item.imgCardProduct1}.png`}
                    alt=""
                  />
                  <div className="pushAndParaProduct">
                    <img src={pushVideo} alt="" />
                    <p>{item.timeVideo1}</p>
                  </div>
                </div>
                <div className="TypscardsProductsVid">
                  <h1>{item.titleCardProduct1}</h1>
                  <p>{item.ParaCardProduct1}</p>
                  <a href="">
                    <button>
                      Listen Podcast <img src={ArooIcon} alt="" />
                    </button>
                  </a>
                </div>
              </div>
              {index < CardDataProducts1.length - 1 && (
                <hr className="LineProduct" />
              )}
            </React.Fragment>
          ))}
        </section>
      </section>

      <section style={{borderTop:"1px solid #262626"}} className="ContainercardsProductsVid">
        <section className="cardsProductsVid">
          {CardDataProducts2.map((item, index) => (
            <React.Fragment key={item.titleCardProduct2}>
              <div className="MainCardProdcutVid">
                <div className="ImgCardsProductVit">
                  <img
                    className="imgCardProductVid"
                    src={`/src/icons/${item.imgCardProduct2}.png`}
                    alt=""
                  />
                  <div className="pushAndParaProduct">
                    <img src={pushVideo} alt="" />
                    <p>{item.timeVideo2}</p>
                  </div>
                </div>
                <div className="TypscardsProductsVid">
                  <h1>{item.titleCardProduct2}</h1>
                  <p>{item.ParaCardProduct2}</p>
                  <a href="">
                    <button>
                      Listen Podcast <img src={ArooIcon} alt="" />
                    </button>
                  </a>
                </div>
              </div>
              {index < CardDataProducts1.length - 1 && (
                <hr className="LineProduct" />
              )}
            </React.Fragment>
          ))}
        </section>
      </section>
    </section>
  );
}
