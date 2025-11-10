import "./chat.css";
// @ts-ignore

// @ts-ignore
// @ts-ignore

// @ts-ignore
import chaty from "/src/icons/chaty.png";
// @ts-ignore
import sendy from "/src/icons/sendy.png";
// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";

export default function chat({
  personImg,
  NamePerson,
  TitlePerson,
  YearChat,
  TitleChat,
  SupTitleChat,
  React,
  NumbReact,
  NumbChat,
  NumbSends,
  BtnChats,
  LinkBtnChats,
}) {
  return (
    <section className="mainChat">
      <div className="MainMainChat">
      <div className="portoChatMain">
        <div className="portoChat">
          <img src={`/src/icons/${personImg}.png`} alt="" />
          <div className="ChatPorto">
            <h1>{NamePerson}</h1>
            <p>{TitlePerson}</p>
          </div>
        </div>
      </div>

      <div className="chatChat">
        <div className="chatTexts">
          <p className="yearChatP">{YearChat}</p>
          <h1>{TitleChat}</h1>
          <p className="chatTextsP">{SupTitleChat}</p>
        </div>
        <div className="chatReacts">
          <button className="loveBtn">
            <img src={`/src/icons/${React}.png`} alt="" />
            <p>{NumbReact}</p>
          </button>
          <button className="ChatBtn">
            <img src={chaty} alt="" />
            <p>{NumbChat}</p>
          </button>

          <button className="SendBtn">
            <img src={sendy} alt="" />
            <p>{NumbSends}</p>
          </button>
        </div>
      </div>

      <div className="ButtnChat">
        <div className="btnChats">
          <a href={LinkBtnChats}>
            <button className="btnChat">
              {BtnChats}
              <img src={ArooIcon} alt="" />
            </button>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
