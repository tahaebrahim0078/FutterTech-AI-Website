import "./headerResourses.css";

export default function headerResourses() {
  return (
    <section className="MainHeaderResourse">
      <section className="headerResourses">
        <div className="textFirstMainResourses">
          <h1 className="FirstdH1">Unlock a World of</h1>
          <div>
            <h1 className="scndHResourse1">Knowledge</h1>
            <p>
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you&apos;re an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="CardHeaderResourses">
        <div className="Main_CardHeaderResourses">
          <div className="CardsHeaderR">
            <h1>
              300<span>+</span>
            </h1>
            <p>Resources available</p>
          </div>
          <hr className="LineResoursesCards" />
          <div className="CardsHeaderR">
            <h1>
              12k<span>+</span>
            </h1>
            <p>Total Downloads</p>
          </div>
          <hr className="LineResoursesCards" />

          <div className="CardsHeaderR">
            <h1>
              10k<span>+</span>
            </h1>
            <p>Active Users</p>
          </div>
          <hr className="LineResoursesCards" />

          <div className="CardsHeaderR">
            <h1>
              100<span>+</span>
            </h1>
            <p>Countries Accesses Our Content</p>
          </div>
        </div>
      </section>

      <section className="BarResoursesHeader">
        <div className="barResourses">
          <div className="leftBarResourses">
            <p>Dive into the Details</p>
            <h1>In-Depth Reports and Analysis</h1>
          </div>

          <div className="rightBarResourses">
            <div className="btnsResoursBar">
              <a href="">
                <button style={{ backgroundColor: "#262626", color: "white" }}>
                  Whitepapers
                </button>
              </a>
              <a href="">
                <button>Ebooks</button>
              </a>

              <a href="">
                <button>Reports</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
