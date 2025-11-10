import "./RatedCards.css";
// @ts-ignore
// @ts-ignore
import StarRated from "/src/icons/StarRated.png";

export default function RatedCards() {
  const RatedData = [
    {
      RatedPersonImg: "RatedPerson1",
      TitleRated: "Sarah Thompson",
      PlaceRated: "San Francisco, USA",
      paraRated:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",

      borderRS: false,
    },
    {
      RatedPersonImg: "RatedPerson2",
      TitleRated: "Raj Patel",
      PlaceRated: "Mumbai, India",
      paraRated:
        "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",

      borderRS: false,
    },
    {
      RatedPersonImg: "RatedPerson3",
      TitleRated: "Emily Adams",
      PlaceRated: "London, UK",
      paraRated:
        "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",

      borderRS: true,
    },
  ];
  const RatedData2 = [
    {
      RatedPersonImg: "RatedPerson4",
      TitleRated: "Alan Jackson",
      PlaceRated: "Houston, USA",
      paraRated:
        "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",

      borderRS: false,
    },
    {
      RatedPersonImg: "RatedPerson5",
      TitleRated: "Jessica Miller",
      PlaceRated: "Boston, USA",
      paraRated:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",

      borderRS: false,
    },
    {
      RatedPersonImg: "RatedPerson6",
      TitleRated: "Diego Lopez",
      PlaceRated: "Barcelona, Spain",
      paraRated:
        "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",

      borderRS: true,
    },
  ];

  return (
    <section className="allRated">
      <section className="MainRated">
        <section className="RatedCards">
          {RatedData.map((item, index) => {
            return (
              <section key={item.TitleRated} className="RatedCards">
                <div className="RatedCardsBorders">
                  <div
                    style={{ border: item.borderRS ? "none" : null }}
                    className="MainCardsRated"
                  >
                    <div className="MainImgRated">
                      <div className="imgRated">
                        <img
                          src={`/src/icons/${item.RatedPersonImg}.png`}
                          alt=""
                        />
                      </div>
                      <div className="NamesRated">
                        <h1>{item.TitleRated}</h1>
                        <p>{item.PlaceRated}</p>
                      </div>
                    </div>

                    <div className="MainStarsRateds">
                      <div className="StarsRateds">
                        <img src={StarRated} alt="" />
                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />
                      </div>
                      <div className="ParaRated">
                        <p>{item.paraRated}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < RatedData.length - 1 && (
                  <hr className="LineRatedCardsHome" />
                )}
              </section>
            );
          })}
        </section>
      </section>
     
     <hr className="SectionLineRatedCards" />

      <section className="MainRated MainRatedDisplayNone">
        <section className="RatedCards">
          {RatedData2.map((item, index) => {
            return (
              <section key={item.TitleRated} className="RatedCards">
                <div className="RatedCardsBorders">
                  <div
                    style={{ border: item.borderRS ? "none" : null }}
                    className="MainCardsRated"
                  >
                    <div className="MainImgRated">
                      <div className="imgRated">
                        <img
                          src={`/src/icons/${item.RatedPersonImg}.png`}
                          alt=""
                        />
                      </div>
                      <div className="NamesRated">
                        <h1>{item.TitleRated}</h1>
                        <p>{item.PlaceRated}</p>
                      </div>
                    </div>

                    <div className="MainStarsRateds">
                      <div className="StarsRateds">
                        <img src={StarRated} alt="" />
                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />

                        <img src={StarRated} alt="" />
                      </div>
                      <div className="ParaRated">
                        <p>{item.paraRated}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < RatedData.length - 1 && (
                  <hr className="LineRatedCardsHome" />
                )}
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
}

///MainRatedDisplayNone

//
