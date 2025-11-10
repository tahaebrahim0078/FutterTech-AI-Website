
import "./BlogOpen.css"; 
import CardBlog from "./componentsBlog/CardBlog/cardBlog";
import Headerblog from "./componentsBlog/headerBlog/headerblog";
import MainBlog from "./componentsBlog/mainBlog/mainBlog";

export default function BlogOpen() {

  
  return (
    <div>
      <Headerblog/>
      <MainBlog/>
      <CardBlog/>
    </div>
  )
}
