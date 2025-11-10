import "./SecondHome.css";

import SccondMainHomeCop from "./sccondMainHomeCop/sccondMainHomeCop";

export default function SecondHome() {
  return (
    <div>
      <SccondMainHomeCop
        SecondHomeImg={"Starry"}
        SecondHomeTitle={"Future Technology Blog"}
        SecondHomeSubTitle={
          "Stay informed with our blog section dedicated to future technology."
        }
        SecondHomeCardTitle1={"Quantity"}
        SecondHomeCardSubTitle1={
          "Over 1,000 articles on emerging tech trends and breakthroughs."
        }
        SecondHomeCardTitle2={"Variety"}
        SecondHomeCardSubTitle2={
          "Articles cover fields like AI, robotics, biotechnology, and more."
        }
        SecondHomeCardTitle3={"Frequency"}
        SecondHomeCardSubTitle3={
          "Fresh content added daily to keep you up to date."
        }
        SecondHomeCardTitle4={"Authoritative"}
        SecondHomeCardSubTitle4={
          "Written by our team of tech experts and industry professionals."
        }
      />
      <SccondMainHomeCop
        SecondHomeImg={"pyramids"}
        SecondHomeTitle={"Research Insights Blogs"}
        SecondHomeSubTitle={
          "Dive deep into future technology concepts with our research section."
        }
        SecondHomeCardTitle1={"Depth"}
        SecondHomeCardSubTitle1={
          "500+ research articles for in-depth understanding."
        }
        SecondHomeCardTitle2={"Graphics"}
        SecondHomeCardSubTitle2={
          "Visual aids and infographics to enhance comprehension."
        }
        SecondHomeCardTitle3={"Trends"}
        SecondHomeCardSubTitle3={
          "Explore emerging trends in future technology research."
        }
        SecondHomeCardTitle4={"Contributors"}
        SecondHomeCardSubTitle4={
          "Contributions from tech researchers and academics."
        }
      />
    </div>
  );
}
