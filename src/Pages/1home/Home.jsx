import Bar from "../../Components/ReusableBarCompo/bar";
import "./Home.css";
import BookHome from "./HomeCompoenets/BookHome/bookHome";

import MainHome from "./HomeCompoenets/MainHome/mainHome";
import RatedCards from "./HomeCompoenets/RatedCards/RatedCards";
import SecondHome from "./HomeCompoenets/SecondMainHome/SecondHome";
import Coments from "./HomeCompoenets/comentsHome/coments";
export default function Home() {
  return (
    <div>
      <MainHome />
      <Bar
        pBar={"Unlock the Power of"}
        hBar={"FutureTech Features"}
        rBAR={""}
        btnBar={""}
        barClass={""}
        rightBarss={""}
      />
      <SecondHome />
      <Bar
        pBar={"A Knowledge Treasure Trove"}
        hBar={"Explore FutureTech's In-Depth Blog Posts"}
        rBAR={"/blogOpen"}
        btnBar={"View All Blogs"}
        barClass={""}
        rightBarss={"rightBar"}
      />
      <Coments />
      <Bar
        pBar={"Your Gateway to In-Depth Information"}
        hBar={"Unlock Valuable Knowledge with FutureTech's Resources"}
        rBAR={"/resourses"}
        btnBar={"View All Resources"}
        barClass={""}
        rightBarss={"rightBar"}
      />
      <BookHome
        LeftIconMain={"BookIcon1"}
        TitleLeft={"Ebooks"}
        SubtitleLeft={
          "Explore our collection of ebooks covering a wide spectrum of future technology topics."
        }
        btnLeft={"Download Ebooks Now"}
        UsersLeft={"10k + Users"}
        iconsBtnLeft1={"personIcon"}
        iconsBtnLeft2={"person1"}
        iconsBtnLeft3={"person2"}
        iconsBtnLeft4={"person3"}
        TitleRight={"Variety of Topics"}
        SubTitleRight={
          "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%)."
        }
        MainImageRight={"bookimg1"}
        btnTextLeftRight={"Over 100 ebooks"}
        btnTextRightRight={"PDF format for access."}
        TextBotRight={
          "Ebooks are authored by renowned experts with an average of 15 years of experience"
        }
        BorderBotBook={true}
      />
      <BookHome
        LeftIconMain={"BookIcon2"}
        TitleLeft={"Whitepapers"}
        SubtitleLeft={
          "Dive into comprehensive reports and analyses with our collection of whitepapers. "
        }
        btnLeft={"Download Whitepapers Now"}
        UsersLeft={"10k + Users"}
        iconsBtnLeft1={"bookPerson1"}
        iconsBtnLeft2={"bookPerson2"}
        iconsBtnLeft3={"bookPerson3"}
        iconsBtnLeft4={"bookPerson4"}
        TitleRight={"Topics Coverage"}
        SubTitleRight={
          "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%)."
        }
        MainImageRight={"bookimg2"}
        btnTextLeftRight={"Over 50 whitepapers"}
        btnTextRightRight={"PDF format for access."}
        TextBotRight={
          "Whitepapers are authored by subject matter experts with an average of 20 years of experience."
        }
        BorderBotBook={undefined}
      />
      <Bar
        pBar={"What Our Readers Say"}
        hBar={"Real Words from Real Readers"}
        rBAR={"/podcastes"}
        btnBar={"View All Testimonials"}
        barClass={""}
        rightBarss={"rightBar"}
      />

      <RatedCards />
    </div>
  );
}
