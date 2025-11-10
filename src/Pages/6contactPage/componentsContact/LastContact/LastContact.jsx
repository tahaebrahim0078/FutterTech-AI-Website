import "./LastContact.css";
// @ts-ignore
import ContactIcon2 from "/src/icons/ContactIcon2.png";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";

export default function LastContact() {
  return (
    <section className="LastContact">
      <div className="MainLastContact">
        <div className="LeftMainLastContact">
          <img src={ContactIcon2} alt="" />
          <h1>Asked question</h1>
          <p>
            If the question is not available on our FAQ section, Feel free to
            contact us personally, we will resolve your respective doubts.{" "}
          </p>
          <a href="">
            <button>
              {" "}
              Ask Qustion <img src={ArooIcon} alt="" />
            </button>
          </a>
        </div>

        <div className="RightMainLastContact">
          <ul className="according">
            <li>
              <input type="radio" name="according" id="first" checked />
              <label htmlFor="first">
                What is AI? <span></span>
              </label>
              <div className="content">
                <hr className="contentAccordingLine" />
                <p>
                  AI stands for Artificial Intelligence, which refers to the
                  simulation of human intelligence in machines. It enables them
                  to perform tasks like problem-solving, learning, and
                  decision-making.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="according" id="secndy" />
              <label htmlFor="secndy">
                How can I listen to your podcasts? <span></span>
              </label>
              <div className="content">
                <hr className="contentAccordingLine" />
                <p>
                  AI stands for Artificial Intelligence, which refers to the
                  simulation of human intelligence in machines. It enables them
                  to perform tasks like problem-solving, learning, and
                  decision-making.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="according" id="thirdy" />
              <label htmlFor="thirdy">
                Are your podcasts free to listen to? <span></span>
              </label>
              <div className="content">
                <hr className="contentAccordingLine" />
                <p>
                  AI stands for Artificial Intelligence, which refers to the
                  simulation of human intelligence in machines. It enables them
                  to perform tasks like problem-solving, learning, and
                  decision-making.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="according" id="forthy" />
              <label htmlFor="forthy">
                Can I download episodes to listen offline? <span></span>
              </label>
              <div className="content">
                <hr className="contentAccordingLine" />
                <p>
                  AI stands for Artificial Intelligence, which refers to the
                  simulation of human intelligence in machines. It enables them
                  to perform tasks like problem-solving, learning, and
                  decision-making.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="according" id="fifthy" />
              <label htmlFor="fifthy">
                How often do you release new episodes? <span></span>
              </label>
              <div className="content">
                <hr className="contentAccordingLine" />
                <p>
                  AI stands for Artificial Intelligence, which refers to the
                  simulation of human intelligence in machines. It enables them
                  to perform tasks like problem-solving, learning, and
                  decision-making.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
