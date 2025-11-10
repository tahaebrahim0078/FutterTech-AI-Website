import "./newsVideos.css";
// @ts-ignore
import videos1 from "/src/icons/videos1.png";
// @ts-ignore
import videos2 from "/src/icons/videos2.png";

// @ts-ignore
import videos3 from "/src/icons/videos3.png";

// @ts-ignore
import videos4 from "/src/icons/videos4.png";

// @ts-ignore
import pushVideo from "/src/icons/pushVideo.png";

export default function newsVideos() {
  return (
    <section className="MainNewsVideos">
      <section className="newsVideos">
        <div className="mainNewsVideos">
          <div className="videosLeft">
            <div className="mainTopVideo">
              <div className="topLeftVideo">
                <div className="imgVideo">
                  <img className="imgVideo1" src={videos1} alt="" />
                  <div className="pushBtnAndTime">
                    <img src={pushVideo} alt="" />
                    <p>2.30 min</p>
                  </div>
                </div>
              </div>
              <div className="BotLeftVideo">
                <h1>Mars Exploration: Unveiling Alien Landscapes</h1>
                <p>
                  Embark on a journey through the Red Planet&apos;s breathtaking
                  landscapes and uncover the mysteries of Mars.
                </p>
              </div>
            </div>

            <hr className="hrLine" />

            <div className="mainTopVideo2">
              <div className="topLeftVideo">
                <div className="imgVideo">
                  <img className="imgVideo1" src={videos3} alt="" />
                  <div className="pushBtnAndTime">
                    <img src={pushVideo} alt="" />
                    <p>2.30 min</p>
                  </div>
                </div>
              </div>
              <div className="BotLeftVideo">
                <h1>Blockchain Explained: A Revolution in Finance</h1>
                <p>
                  Delve into the world of blockchain technology and its
                  transformative impact on the financial industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hrLine" />
           

      <section className="newsVideos">
        <div className="mainNewsVideos">
          <div className="videosLeft">
            <div className="mainTopVideo">
              <div className="topLeftVideo">
                <div className="imgVideo">
                  <img className="imgVideo1" src={videos2} alt="" />
                  <div className="pushBtnAndTime">
                    <img src={pushVideo} alt="" />
                    <p>2.30 min</p>
                  </div>
                </div>
              </div>
              <div className="BotLeftVideo">
                <h1>
                  Breaking the Silence: Mental Health Awareness in the Workplace
                </h1>
                <p>
                  An exploration of the importance of mental health awareness
                  and the initiatives reshaping workplaces for employee
                  well-being.
                </p>
              </div>
            </div>

            <hr className="hrLine" />

            <div className="mainTopVideo2">
              <div className="topLeftVideo">
                <div className="imgVideo">
                  <img className="imgVideo1" src={videos4} alt="" />
                  <div className="pushBtnAndTime">
                    <img src={pushVideo} alt="" />
                    <p>2.30 min</p>
                  </div>
                </div>
              </div>
              <div className="BotLeftVideo">
                <h1>Revolutionizing Investment Strategies</h1>
                <p>
                  An in-depth look at global efforts to conserve biodiversity
                  and safeguard endangered species from extinction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
