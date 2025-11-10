import './headerblog.css';
// @ts-ignore
import BlogMain from "/src/icons/BlogMain.png"
export default function headerblog() {
  return (
    <div className='headerblog'>
          <img src={BlogMain} alt="" />
          <h1>The Rise of Artificial Intelligence in Healthcare</h1>
    </div>
  )
}
