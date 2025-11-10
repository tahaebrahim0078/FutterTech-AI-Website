import Chat from "../../../../Components/Chat/chat";
import "./coments.css";

export default function coments() {
  const DataChT = [
    {
      personImg: "person1",
      NamePerson: "John Techson",
      TitlePerson: "Quantum Computing",
      YearChat: "October 15, 2023",
      TitleChat: "The Quantum Leap in Computing",
      SupTitleChat:
        "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      React: "love",
      NumbReact: "24.5k",
      NumbChat: "50",
      NumbSends: "20",
      BtnChats: "View Blog",
      LinkBtnChats: "/blogOpen",
    },
    {
      personImg: "person2",
      NamePerson: "Sarah Ethicist",
      TitlePerson: "AI Ethics",
      YearChat: "November 5, 2023",
      TitleChat: "The Ethical Dilemmas of AI",
      SupTitleChat:
        "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",

      React: "blackLove",
      NumbReact: "32k",
      NumbChat: "72",
      NumbSends: "18",
      BtnChats: "View Blog",
      LinkBtnChats: "/blogOpen",
    },
    {
      personImg: "person3",
      NamePerson: "Astronomer X",
      TitlePerson: "Space Exploration",
      YearChat: "December 10, 2023",
      TitleChat: "The Mars Colonization Challenge",
      SupTitleChat:
        "Exploring the technical and logistical challenges of human colonization on Mars.",
      React: "blackLove",
      NumbReact: "20k",
      NumbChat: "31",
      NumbSends: "12",
      BtnChats: "View Blog",
      LinkBtnChats: "/blogOpen",
    },
  ];
  return (
    <section>
      <div className="MainMainHeaderComm">
      <div className="MainHeaderComm">
         <div className="headerComm">
        <a href="">
          <button style={{ backgroundColor: "#1A1A1A", color: "white" }}>
            All
          </button>
        </a>
        <a href="">
          <button>Quantum Computing</button>
        </a>

        <a href="">
          <button>AI Ethics</button>
        </a>

        <a href="">
          <button>Space Exploration</button>
        </a>
        <a href="">
          <button>Biotechnology</button>
        </a>

        <a href="">
          <button>Renewable Energy</button>
        </a>
       
      </div>
      </div>
  
      </div>
      {DataChT.map((chat, index) => {
        return <Chat key={index} {...chat} />;
      })}
    </section>
  );
}
