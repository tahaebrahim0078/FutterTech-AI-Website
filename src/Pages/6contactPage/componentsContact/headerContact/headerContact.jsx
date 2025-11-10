import "./headerContact.css";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";
// @ts-ignore
import iconsSuperFooter1 from "/src/icons/iconsSuperFooter1.png";
// @ts-ignore
import iconsSuperFoote2 from "/src/icons/iconsSuperFoote2.png";

// @ts-ignore
import iconsSuperFooter3 from "/src/icons/iconsSuperFooter3.png";

export default function headerContact() {
  return (
    <section className="headerContact">
      <div className="MainheaderContact">
        <div className="headerContactCard">
          <h1>General Inquiries</h1>
          <div className="btnHeaderContactCard">
            <a href="">
              {" "}
              <button>
                contact@ai-podcasts.com <img src={ArooIcon} alt="" />
              </button>
            </a>
            <a href="">
              {" "}
              <button>
                +1 (123) 456-7890 <img src={ArooIcon} alt="" />
              </button>
            </a>
          </div>
        </div>

        <hr className="LineMainheaderContact" />

        <div className="headerContactCard">
          <h1>Technical Support</h1>
          <div className="btnHeaderContactCard">
            <a href="">
              {" "}
              <button>
                contact@ai-podcasts.com <img src={ArooIcon} alt="" />
              </button>
            </a>
            <a href="">
              {" "}
              <button>
                +1 (123) 456-7890 <img src={ArooIcon} alt="" />
              </button>
            </a>
          </div>
        </div>

        <hr className="LineMainheaderContact" />
           

        <div className="headerContactCard">
          <h1>Our Office</h1>
          <div className="btnHeaderContactCard">
            <p>Address: 123 AI Tech Avenue, Techville, 54321</p>
            <a href="">
              {" "}
              <button>
                Get Directions <img src={ArooIcon} alt="" />
              </button>
            </a>
          </div>
        </div>

        <hr className="LineMainheaderContact" />
       

        <div className="headerContactCard">
          <h1>Connect with Us</h1>
          <div className="LastBtnHeaderContactCard">
            <a href="">
              {" "}
              <img src={iconsSuperFooter1} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={iconsSuperFoote2} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={iconsSuperFooter3} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
