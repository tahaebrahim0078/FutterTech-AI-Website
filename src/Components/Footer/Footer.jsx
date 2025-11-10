import "./Footer.css";

// @ts-ignore
import footerLogo from "/src/icons/FooterLogo.png";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";

// @ts-ignore

import iconsSuperFooter1 from "/src/icons/iconsSuperFooter1.png";
// @ts-ignore
import iconsSuperFooter2 from "/src/icons/iconsSuperFoote2.png";

// @ts-ignore
import iconsSuperFooter3 from "/src/icons/iconsSuperFooter3.png";

export default function Footer() {
  const CardDataFooter = [
    {
      CardTitleFooter: "Resource Access",
      CardSubTitleFooter:
        "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
      CardImgFooter: "arooYello",
      CardFooterURL: "/resourses",
    },
    {
      CardTitleFooter: "Community Forum",
      CardSubTitleFooter:
        "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
      CardImgFooter: "arooYello",
      CardFooterURL: "/news",
    },
    {
      CardTitleFooter: "Tech Events",
      CardSubTitleFooter:
        "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
      CardImgFooter: "arooYello",
      CardFooterURL: "/podcastes",
    },
  ];
  return (
    <section className="MainFooter">
      <div className="TopFooter">
        <div className="TopTopFooter">
          <div className="imgFooter">
            <img src={footerLogo} alt="" />
            <span className="btnParaFooterLogo">Learn, Connect, and Innovate</span>
          </div>
          <div className="TextTopFooter">
            <span className="btnParaFooter">Learn, Connect, and Innovate</span>
            <h1>Be Part of the Future Tech Revolution</h1>
            <p>
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="MainBotTopFooter">
          <div className="BotTopFooter">
            {CardDataFooter.map((item) => {
              return (
                <div key={item.CardTitleFooter} className="CardTopFooter">
                  <div className="TextBotCardFooter">
                    <h1>{item.CardTitleFooter}</h1>
                    <p>{item.CardSubTitleFooter}</p>
                  </div>
                  <div className="imgCardFooter">
                    <a href={item.CardFooterURL}>
                      <img src={`/src/icons/${item.CardImgFooter}.png`} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="BotFooter">
        <div className="BotFooterLinks">
          <div className="LinFooterLink1">
            <a className="TopLinksFooterBottom" href="/home">
              Home
            </a>
            <a href="/news">Features</a>
            <a href="/blogOpen">Blogs</a>

            <a href="/resourses">
              Resources
              <span className="SpanNew">
                <span>New</span>
              </span>
            </a>

            <a href="/news">Testimonials</a>

            <a href="/contact">Contact Us</a>

            <a href="/news">Newsletter</a>
          </div>
          <div className="LinFooterLink2">
            <a className="TopLinksFooterBottom" href="/news">
              News
            </a>
            <a href="/news">Trending Stories</a>

            <a href="/news">Featured Videos</a>

            <a href="/news">Technology</a>

            <a href="/news">Health</a>

            <a href="/news">Politics</a>

            <a href="/news">Environment</a>
          </div>

          <div className="LinFooterLink3">
            <a className="TopLinksFooterBottom" href="/blogOpen">
              Blogs
            </a>
            <a href="/blogOpen">Quantum Computing</a>

            <a href="/blogOpen">AI Ethics</a>

            <a href="/blogOpen">Space Exploration</a>

            <a href="/blogOpen">
              Biotechnology
              <span className="SpanNew">
                <span>New</span>
              </span>
            </a>

            <a href="/blogOpen">Renewable Energy</a>

            <a href="/blogOpen">Biohacking</a>
          </div>

          <div className="LinFooterLink4">
            <a className="TopLinksFooterBottom" href="/podcastes/podcastes">
              Podcasts
            </a>
            <a href="/podcastes">AI Revolution</a>

            <a href="/podcastes">
              AI Revolution
              <span className="SpanNew">
                <span>New</span>
              </span>
            </a>

            <a href="/podcastes">TechTalk AI</a>

            <a href="/podcastes">AI Conversations</a>
          </div>

          <div className="LinFooterLink5">
            <a className="TopLinksFooterBottom" href="/resourses">
              Resources
            </a>
            
            <div className="LinksFooterBottomBTN_Main">
            <a href="">
              <button className="LinksFooterBottomBTN">
                Whitepapers <img src={ArooIcon} alt="/resourses" />
              </button>
            </a>
            <a href="">
              <button className="LinksFooterBottomBTN">
                Ebooks <img src={ArooIcon} alt="/resourses" />
              </button>
            </a>

            <a href="">
              <button className="LinksFooterBottomBTN">
                Reports <img src={ArooIcon} alt="/resourses" />
              </button>
            </a>

            <a href="">
              <button className="LinksFooterBottomBTN">
                Research Papers <img src={ArooIcon} alt="/resourses" />
              </button>
            </a>
            </div>

          </div>
        </div>
      </div>

      <div className="SuperBotFooter">
        <div className="TypsSuperBotFooter">
          <p>Terms & Conditions </p>
          <p style={{ color: "#262626" }}>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="IconsSuperBotFooter">
          <a href="">
            {" "}
            <img src={iconsSuperFooter1} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={iconsSuperFooter2} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={iconsSuperFooter3} alt="" />
          </a>
        </div>
        <div className="ParaSuperBotFooter">
          <p>© 2024 Developed by Taha Ibrahim .</p>
        </div>
      </div>
    </section>
  );
}
