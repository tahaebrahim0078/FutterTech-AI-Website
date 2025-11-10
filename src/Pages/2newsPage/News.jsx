import Bar from "../../Components/ReusableBarCompo/bar";
import "./News.css";
import MainNews from "./componentsNews/mainNews/mainNews";
import ComentsNews from "./componentsNews/comentsNews/comentsNews";
import NewsVideos from "./componentsNews/newsVideos/newsVideos";
export default function News() {
  return (
    <div>
      <MainNews />
      <Bar
        pBar={"Welcome to Our News Hub"}
        hBar={"Discover the World of Headlines"}
        rBAR={"/news"}
        btnBar={"View All News"}
        barClass={""} rightBarss={""}      />
      <ComentsNews/>
      <Bar
        pBar={"Featured Videos"}
        hBar={"Visual Insights for the Modern Viewer"}
        rBAR={"/news"}
        btnBar={"View All"}
        barClass={""} rightBarss={""}      />
      <NewsVideos/>
    </div>
  );
}
