import "./mainNews.css";
// @ts-ignore
import NewsPhoto1 from "/src/icons/NewsPhoto1.png";
// @ts-ignore
import blackLove from "/src/icons/blackLove.png";
// @ts-ignore
import sendy from "/src/icons/sendy.png";
// @ts-ignore
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";

export default function mainNews() {
  const ThirdDataCardNews = [
    {
      imgDataCardNews: "thirdNews1",
      titleDataCardNews: "A Decisive Victory for Progressive Policies",
      subtitleDataCardNews: "Politics",
      heartReactDataCardNews: "14k",
      sendDataCardNews: "204",
    },
    {
      imgDataCardNews: "thirdNews2",
      titleDataCardNews: "Tech Giants Unveil Cutting-Edge AI Innovations",
      subtitleDataCardNews: "Technology",
      heartReactDataCardNews: "6k",
      sendDataCardNews: "92",
    },
    {
      imgDataCardNews: "thirdNews3",
      titleDataCardNews: "COVID-19 Variants",
      subtitleDataCardNews: "Health",
      heartReactDataCardNews: "10k",
      sendDataCardNews: "124",
    },
  ];
  return (
    <section className="mainNews">
      <section className="firstMainNews">
        <div className="textFirstMainNews">
          <h1 className="FirstdH1">Today&apos;s Headlines: Stay</h1>
          <div>
            <h1 className="scndHNews1">Informed</h1>
            <p>
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="secndMainNews">
        <div className="CardSecndMainNews">
          <div className="ImgNewsLeft">
            <img src={NewsPhoto1} alt="" />
          </div>
          <div className="RightNewsScndCard">
            <h1>Global Climate Summit Addresses Urgent Climate Action</h1>
            <p className="paraRightNewsScndCard">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="SubtitlsNewsScnd">
              <div className="SubtitlsNewsScnd1">
                <p>Category</p>
                <h1>Environment</h1>
              </div>
              <div className="SubtitlsNewsScnd1">
                <p>Publication Date</p>
                <h1>October 10, 2023</h1>
              </div>

              <div className="SubtitlsNewsScnd1">
                <p>Author</p>
                <h1>Jane Smith</h1>
              </div>
            </div>
            <div className="btnNewsScndReact">
              <div className="ChatSendNewsBTN">
                <button className="ChatBtnNews">
                  <img src={blackLove} alt="" />
                  <p>14k</p>
                </button>

                <button className="SendBtnNews">
                  <img src={sendy} alt="" />
                  <p>204</p>
                </button>
              </div>
              <a href="">
                <button className="LastbtnNewsScnd">Read More</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="thirdMainNews">
        <div className="thirdMainNewsContained">
          {ThirdDataCardNews.map((item) => {
            return (
              <div key={item.titleDataCardNews} className="mainThirdMainNews">
                <div className="imgThirdNews">
                  <img src={`/src/icons/${item.imgDataCardNews}.png`} alt="" />
                </div>
                <div className="textThirdNews">
                  <h1>{item.titleDataCardNews}</h1>
                  <p>{item.subtitleDataCardNews}</p>
                </div>
                <div className="btnThirdNews">
                  <div className="ChatSendNewsBTN">
                    <button className="ChatBtnNews">
                      <img src={blackLove} alt="" />
                      <p>{item.heartReactDataCardNews}</p>
                    </button>

                    <button className="SendBtnNews">
                      <img src={sendy} alt="" />
                      <p>{item.sendDataCardNews}</p>
                    </button>
                  </div>
                  <button className="ArooIconBtnThirdNews">
                    Read More <img src={ArooIcon} alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
 
}
