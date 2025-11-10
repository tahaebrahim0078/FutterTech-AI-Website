// @ts-ignore
import ArooIcon from "/src/icons/ArooIcon.png";
import "./bar.css";

export default function bar({ pBar, hBar, rBAR, btnBar, barClass ,rightBarss }) {
  return (
    <div className="MainBar">
    <div className="bar">
      <div
        style={{ marginRight: barClass ? "650px" : null }}
        className="leftBar"
      >
        <p>{pBar}</p>
        <h1>{hBar}</h1>
      </div>

      <div className={rightBarss}>
        {rBAR ? (
          <a href={rBAR}>
            <button className="btnBar">
              {btnBar} <img src={ArooIcon} alt="" />
            </button>
          </a>
        ) : (
          false
        )}
      </div>
    </div>
    </div>
  );
}
