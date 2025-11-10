import "./mainHome.css";

// @ts-ignore
import moon from "/src/icons/moon.png";

// @ts-ignore
import person from "/src/icons/personIcon.png";

// @ts-ignore
import person2 from "/src/icons/person2.png";

// @ts-ignore
import person1 from "/src/icons/person1.png";
// @ts-ignore
import person3 from "/src/icons/person3.png";

// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";
// @ts-ignore
import flower from "/src/icons/flower.png";
// @ts-ignore
import clover from "/src/icons/clover.png";
// @ts-ignore
import pants from "/src/icons/pants.png";

// @ts-ignore
import arooYello from "/src/icons/arooYello.png";

export default function mainHome() {
  return (
    <div className="mainHomeContainer">
      <section className="mainHome">
        <div className="left">
          <div className="typs">
            <p className="p1">Your Journey to Tomorrow Begins Here</p>
            <h1>Explore the Frontiers of Artificial Intelligence</h1>
            <p className="p2">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <hr className="LinTopCardsMainHome" />

          <div className="cards">
            <div className="card1 cardSpecila  LasBordertcard1">
              <h1>
                300<span className="plus">+</span>
              </h1>
              <p>Resources available</p>
            </div>
            <div className="card1    cardSpecilass  LasBordertcard1">
              <h1>
                12k<span className="plus">+</span>
              </h1>
              <p>Total Downloads</p>
            </div>

            <div className="card1 cardSpecilass  ">
              <h1>
                10k<span className="plus">+</span>
              </h1>
              <p>Active Users</p>
            </div>
          </div>
        </div>

        <div className="right">
          <img className="moon" src={moon} alt="" />
          <div className="downRight">
            <div className="imgCards">
              <img className="imgP1" src={person} alt="" />
              <img className="imgP2" src={person2} alt="" />
              <img className="imgP3" src={person1} alt="" />
              <img className="imgP4" src={person3} alt="" />
            </div>
            <h1>Explore 1000+ resources</h1>
            <p>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <a href="/resourses">
              <button className="btnResourses">
                Explore Resources <img src={ArooIcon} alt="" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <hr className="LineCardsMainHomeCards" />

      <section className="mainHomeDwon">
        <div className=" BigCards">
          <div className="Bcard1">
            <div className="leftCard">
              <img src={flower} alt="" />
              <h1>Latest News Updates</h1>
              <p>Stay Current</p>
              <p>Over 1,000 articles published monthly</p>
            </div>
            <a href="/news">
              <img className="arooYello" src={arooYello} alt="" />
            </a>
          </div>
          <hr className="LineCardsMainHome" />

          <div className="Bcard2">
            <div className="leftCard">
              <img src={clover} alt="" />

              <h1>Expert Contributors</h1>
              <p>Trusted Insights</p>
              <p>50+ renowned AI experts on our team</p>
            </div>
            <a href="/podcastes">
              <img className="arooYello" src={arooYello} alt="" />
            </a>
          </div>
          <hr className="LineCardsMainHome" />

          <div className="Bcard3">
            <div className="leftCard">
              <img src={pants} alt="" />

              <h1>Global Readership</h1>
              <p>Worldwide Impact</p>
              <p>2 million monthly readers</p>
            </div>
            <a href="/blogOpen">
              <img className="arooYello" src={arooYello} alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
