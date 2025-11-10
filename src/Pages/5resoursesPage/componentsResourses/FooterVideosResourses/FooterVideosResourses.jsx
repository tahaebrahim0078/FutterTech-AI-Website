import "./FooterVideosResourses.css";
// @ts-ignore
import FooterVideosRcards1 from "/src/icons/FooterVideosRcards1.png";
// @ts-ignore
import FooterVideosRcards2 from "/src/icons/FooterVideosRcards2.png";

// @ts-ignore
import FooterVideosRcards3 from "/src/icons/FooterVideosRcards3.png";

export default function FooterVideosResourses() {
  return (
    <section className="FooterVideosResourses">
      <div className="MainFooterVideosResourses">
        <div className="FooterVideosRcards">
          <img src={FooterVideosRcards1} alt="" />
          <div className="TypsFooterVideosRcards">
            <h1>FutureTech Trends 2024</h1>
            <p>
              An ebook that predicts upcoming technology trends for the next
              year, including AI developments
            </p>
          </div>
          <div className="BtnFooterVideosRcards">
            <a href="">
              <button>View Details</button>
            </a>
            <a href="">
              <button style={{ backgroundColor: "#1A1A1A" }}>
                Download PDF Now
              </button>
            </a>
          </div>
        </div>
        <hr className="LineFooterVidRes" />
        <div className="FooterVideosRcards">
          <img src={FooterVideosRcards2} alt="" />
          <div className="TypsFooterVideosRcards">
            <h1>FutureTech Trends 2024</h1>
            <p>
              An ebook that predicts upcoming technology trends for the next
              year, including AI developments
            </p>
          </div>
          <div className="BtnFooterVideosRcards">
            <a href="">
              <button>View Details</button>
            </a>
            <a href="">
              <button style={{ backgroundColor: "#1A1A1A" }}>
                Download PDF Now
              </button>
            </a>
          </div>
        </div>
        <hr className="LineFooterVidRes" />
        <div className="FooterVideosRcards">
          <img src={FooterVideosRcards3} alt="" />
          <div className="TypsFooterVideosRcards">
            <h1>FutureTech Trends 2024</h1>
            <p>
              An ebook that predicts upcoming technology trends for the next
              year, including AI developments
            </p>
          </div>
          <div className="BtnFooterVideosRcards">
            <a href="">
              <button>View Details</button>
            </a>
            <a href="">
              <button style={{ backgroundColor: "#1A1A1A" }}>
                Download PDF Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
