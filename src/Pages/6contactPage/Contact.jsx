import HeaderContact from "./componentsContact/headerContact/headerContact";
import LastContact from "./componentsContact/LastContact/LastContact";
import MainContact from "./componentsContact/mainContact/mainContact";
import "./Contact.css"; 

export default function Contact() {
  return (
    <div>
      <HeaderContact/>
      <MainContact/>
      <LastContact/>
    </div>
  )
}
