import './mainContact.css';
// @ts-ignore
import ContactIcon1 from "/src/icons/ContactIcon1.png";
// @ts-ignore
import egypt from "/src/icons/egypt.webp";
// @ts-ignore
import ArroDownSolid from "/src/icons/ArroDownSolid.png";


export default function mainContact() {
  return (
    <section className='mainContact'>
         <div className="MainMainContact">
            <div className="LeftMainContact">

              <img src={ContactIcon1} alt="" />
              <h1>Get in Touch with AI Podcasts</h1>

              
            </div>


             

            <div className="RightMainContact">
                  <div className="TopRightMainContact">
                         
                         <div className="FirstRightMainContact">
                            <div className="Left_FirstRightMainContact">
                               <h1>First Name</h1>
                               <input type="text" checked   placeholder='Enter First Name'/>
                            </div>
                            <div className="Right_FirstRightMainContact">
                               <h1>Last Name</h1>
                               <input type="text"  placeholder='Enter Last Name'/>
                            </div>
                         </div>
                         <div className="SecondtRightMainContact">
                         <div className="Left_SecondtRightMainContact">
                               <h1>Email</h1>
                               <input type="email"    placeholder='Enter your Email'/>
                            </div>
                            <div className="Right_SecondtRightMainContact">
                               <h1>Phone Number</h1>
                              <div className="FlagRight_SecondtRightMainContact">
                               <button className='FlagRight_SecondtRightMainContactBtn'>
                                <img src={egypt} alt="" />
                                <img src={ArroDownSolid} alt="" />
                               </button>

                              <input type="number"    placeholder='Enter Phone Number'/>
                              </div>
                            </div>
                         </div>

                         <div className="ThirdRightMainContact">
                            <h1>Message</h1>
                         <input type="text"    placeholder='Enter your Message'/>

                         </div>

                  </div>

              
                    <div className="BotRightMainContact">
                        <div className="LeftBotRightMainContact">
                        <input type="checkbox" id='check' />
                        <label>I agree with Terms of Use and Privacy Policy</label>
                        </div>
                        <a href=""><button>Send</button></a>
                    </div>

            </div>
         </div>
    </section>
  )
}
