import "./Header.css";
// @ts-ignore
import ArooIcoon from "/src/icons/ArooIcon.png";
// @ts-ignore
import MainLogo from "/src/icons/MainLogo.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// @ts-ignore
import closeHeader from "/src/icons/closeHeader.png";
// @ts-ignore
import Xclose from "/src/icons/Xclose.png";

export default function Header() {
  let location = useLocation();
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div>
      <div className="topHeader">
        <h1>
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </h1>
        <a href="/blogOpen">
          {" "}
          <img src={ArooIcoon} alt="" />{" "}
        </a>
      </div>
      <div className="MianHeadery ">
        <div className="MianHeader  ">
          <a href="/home">
            {" "}
            <img src={MainLogo} alt="" />
          </a>

          <ul className="mainList">
            <li
              style={{
                backgroundColor:
                  location.pathname === "/home" ? "#141414" : null,
                border:
                  location.pathname === "/home" ? "1px solid #333333" : null,
              }}
            >
              <a
                style={{
                  color: location.pathname === "/home" ? "white" : null,
                }}
                href="/home"
              >
                Home
              </a>
            </li>
            <li
              style={{
                backgroundColor:
                  location.pathname === "/news" ? "#141414" : null,
                border:
                  location.pathname === "/news" ? "1px solid #333333" : null,
              }}
            >
              <a
                style={{
                  color: location.pathname === "/news" ? "white" : null,
                }}
                href="/news"
              >
                News
              </a>
            </li>
            <li
              style={{
                backgroundColor:
                  location.pathname === "/podcastes" ? "#141414" : null,
                border:
                  location.pathname === "/podcastes"
                    ? "1px solid #333333"
                    : null,
              }}
            >
              <a
                style={{
                  color: location.pathname === "/podcastes" ? "white" : null,
                }}
                href="/podcastes"
              >
                Podcasts
              </a>
            </li>
            <li
              style={{
                backgroundColor:
                  location.pathname === "/resourses" ? "#141414" : null,
                border:
                  location.pathname === "/resourses"
                    ? "1px solid #333333"
                    : null,
              }}
            >
              <a
                style={{
                  color: location.pathname === "/resourses" ? "white" : null,
                }}
                href="/resourses"
              >
                Resources
              </a>
            </li>
          </ul>

          <a href="/contact">
            <button className="btnHeaderContact">Contact Us</button>
          </a>

          <button
            onClick={() => {
              setShowHeader(true);
            }}
            className="HeaderCloseBTN"
          >
            <img src={closeHeader} alt="" />
          </button>

          {showHeader && (
            <div className="btn590px">
              <ul className="mainListBtn590px">
                <li
                className="btnFirstChildHeader"
                  style={{
                    backgroundColor:
                      location.pathname === "/home" ? "#141414" : null,
                    border:
                      location.pathname === "/home"
                        ? "1px solid #333333"
                        : null,
                  }}
                >
                  <a
                    style={{
                      color: location.pathname === "/home" ? "white" : null,
                    }}
                    href="/home"
                  >
                    Home
                  </a>
                  <button
                  onClick={() => {
                    setShowHeader(false);
                  }}
                  className="closeBtnHeaderCard"
                >
                  <img src={Xclose} alt="" />
                </button>
                </li>
                <li
                  style={{
                    backgroundColor:
                      location.pathname === "/news" ? "#141414" : null,
                    border:
                      location.pathname === "/news"
                        ? "1px solid #333333"
                        : null,
                  }}
                >
                  <a
                    style={{
                      color: location.pathname === "/news" ? "white" : null,
                    }}
                    href="/news"
                  >
                    News
                  </a>
                </li>
                <li
                  style={{
                    backgroundColor:
                      location.pathname === "/podcastes" ? "#141414" : null,
                    border:
                      location.pathname === "/podcastes"
                        ? "1px solid #333333"
                        : null,
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/podcastes" ? "white" : null,
                    }}
                    href="/podcastes"
                  >
                    Podcasts
                  </a>
                </li>
                <li
                  style={{
                    backgroundColor:
                      location.pathname === "/resourses" ? "#141414" : null,
                    border:
                      location.pathname === "/resourses"
                        ? "1px solid #333333"
                        : null,
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/resourses" ? "white" : null,
                    }}
                    href="/resourses"
                  >
                    Resources
                  </a>
                </li>
                <li
                  style={{
                    backgroundColor:
                      location.pathname === "/contact" ? "#141414" : null,
                    border:
                      location.pathname === "/contact"
                        ? "1px solid #333333"
                        : null,
                  }}
                >
                  <a
                    style={{
                      color: location.pathname === "/contact" ? "white" : null,
                    }}
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
       
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
