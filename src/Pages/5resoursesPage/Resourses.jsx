import FooterVideosResourses from "./componentsResourses/FooterVideosResourses/FooterVideosResourses";
import HeaderResourses from "./componentsResourses/HeaderResourses/headerResourses";
import VideosResourses from "./componentsResourses/VideosResourses/VideosResourses";
import "./Resourses.css"; 

export default function Resourses() {
  return (
    <div>
      <HeaderResourses/>
      <VideosResourses/>
      <FooterVideosResourses/>
    </div>
  )
}
