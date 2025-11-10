import "./VideosResourses.css";
import VideosResoursesReusable from "./VideosResoursesReusable/VideosResoursesReusable";

export default function VideosResourses() {
  
  const DataResoursesVideos  = [
    {
      id: 1,
      VideoResourseIcon: "VideoResourseIcon1",
      titleLeftResoursesVid: "Quantum Computing Whitepaper",
      subTitleLeftResoursesVid:
        "Provides technical specifications and requirements for implementing quantum computing systems.",
      VideoResourseimg: "VideoResourseimg1",
      RightTitleResoursesVid: "Quantum Computing Whitepaper",
      subRightTitleResoursesVid:
        "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
      TitleCardONEvidResourseRight: "Publication Date",
      DateCardONEvidResourseRight: "July 2023",
      TitleCardTOWvidResourseRight: "Category",
      DateCardTOWvidResourseRight: "Quantum Computing",
      TitleCardTHREEvidResourseRight: "Author",
      DateCardTHREEvidResourseRight: "Dr. Quantum",
    },
    {
      id: 2,
      VideoResourseIcon: "VideoResourseIcon2",
      titleLeftResoursesVid: "Space Exploration Whitepaper",
      subTitleLeftResoursesVid:
        "Explores Mars colonization, asteroid resource potential, and space tourism.",
      VideoResourseimg: "VideoResourseimg2",
      RightTitleResoursesVid: "Space Exploration Whitepaper",
      subRightTitleResoursesVid:
        "An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.",
      TitleCardONEvidResourseRight: "Publication Date",
      DateCardONEvidResourseRight: "September 2023",
      TitleCardTOWvidResourseRight: "Category",
      DateCardTOWvidResourseRight: "Space Exploration",
      TitleCardTHREEvidResourseRight: "Author",
      DateCardTHREEvidResourseRight: "FutureTech Space Division",
    },
  ];
  return (
    <div>
      {DataResoursesVideos.map((vid)=> {
        return <VideosResoursesReusable key={vid.id} {...vid} />;
      })}
    </div>
  );
}


