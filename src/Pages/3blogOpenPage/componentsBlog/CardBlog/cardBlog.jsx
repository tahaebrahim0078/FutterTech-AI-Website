import "./cardBlog.css";
// @ts-ignore
import blackLove from "/src/icons/blackLove.png";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";
// @ts-ignore
import sendy from "/src/icons/sendy.png";
// @ts-ignore



export default function cardBlog() {
  const ThirdDataCardBlogs = [
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
    <div>
      <section className="cardBlog">
      <div className="topBlogCards">
            <h1>Similar News</h1>
            <a href="/news"><button>View All News<img src={ArooIcon} alt="" /></button></a>
        </div>
        <div className="thirdMainBlogContained">
            
          {ThirdDataCardBlogs.map((item) => {
            return (
              <div key={item.titleDataCardNews} className="mainThirdMainBlog">
                <div className="imgThirdNews">
                  <img src={`/src/icons/${item.imgDataCardNews}.png`} alt="" />
                </div>
                <div className="textBlog">
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
    </div>
  );
}
