import Chat from '../../../../Components/Chat/chat';
import './comentsNews.css';

export default function comentsNews() {
    const DataChTNews = [
        {
          personImg: "personIcon",
          NamePerson: "John Techson",
          TitlePerson: "Technology",
          YearChat: "October 15, 2023",
          TitleChat: "Tech Giants Announce New Product Line",
          SupTitleChat:
            "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape",
          React: "love",
          NumbReact: "24.5k",
          NumbChat: "50",
          NumbSends: "20",
          BtnChats: "Read More",
          LinkBtnChats: "/news",
        },
        {
          personImg: "person2",
          NamePerson: "Sarah Ethicist",
          TitlePerson: "Technology",
          YearChat: "October 11, 2023",
          TitleChat: "The Future of Autonomous Vehicles",
          SupTitleChat:
            "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
    
          React: "blackLove",
          NumbReact: "32k",
          NumbChat: "72",
          NumbSends: "18",
          BtnChats: "Read More",
          LinkBtnChats: "/news",
        },
        {
          personImg: "person3",
          NamePerson: "Astronomer X",
          TitlePerson: "Technology",
          YearChat: "December 10, 2023",
          TitleChat: "Tech Startups Secure Record Funding",
          SupTitleChat:
            "An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.",
          React: "blackLove",
          NumbReact: "20k",
          NumbChat: "31",
          NumbSends: "12",
          BtnChats: "Read More",
          LinkBtnChats: "/news",
        },
      ];
      return (
        <section>
          <div className="headerCommNews">
            <a href="">
              <button style={{ backgroundColor: "#1A1A1A", color: "white" }}>
                All
              </button>
            </a>
            <a href="">
              <button>Technology</button>
            </a>
    
            <a href="">
              <button>Politics</button>
            </a>
    
            <a href="">
              <button>Health</button>
            </a>
            <a href="">
              <button>Environment</button>
            </a>
    
            <a href="">
              <button>Sports</button>
            </a>
          </div>
    
          {DataChTNews.map((chat, index) => {
            return <Chat key={index} {...chat} />;
          })}
        </section>
  )
}
