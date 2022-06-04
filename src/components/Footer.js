import React from 'react'
import "../styles/Footer.css"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'


const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.3 8H39.8V11H33.25L34 11.7Q37 14.5 38.5 17.7Q40 20.9 40 23.85Q40 29.15 36.9 33.4Q33.8 37.65 28.7 39.25V36.1Q32.5 34.65 34.75 31.275Q37 27.9 37 23.85Q37 21.45 35.825 18.975Q34.65 16.5 32.75 14.6L31.3 13.3V19.5H28.3ZM19.85 40H8.35V37H14.85L14.1 36.4Q10.9 33.85 9.45 30.85Q8 27.85 8 24.15Q8 18.85 11.125 14.625Q14.25 10.4 19.35 8.8V11.9Q15.6 13.35 13.3 16.725Q11 20.1 11 24.15Q11 27.3 12.175 29.625Q13.35 31.95 15.35 33.65L16.85 34.7V28.5H19.85Z" /></svg>
const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.8 30.65 33.2 19.25 31.1 17.2 21.95 26.35 16.9 21.3 14.7 23.5ZM24 43.95Q17 42.2 12.5 35.825Q8 29.45 8 21.85V9.95L24 3.95L40 9.95V21.85Q40 29.45 35.5 35.825Q31 42.2 24 43.95ZM24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55ZM24 40.85Q29.75 38.95 33.375 33.675Q37 28.4 37 21.85V12.05L24 7.15L11 12.05V21.85Q11 28.4 14.625 33.675Q18.25 38.95 24 40.85Z" /></svg>
const paperMap = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M30.6 42 17.45 37.35 8.5 40.9Q7.65 41.35 6.825 40.85Q6 40.35 6 39.35V11.45Q6 10.8 6.375 10.3Q6.75 9.8 7.35 9.55L17.45 6L30.6 10.6L39.5 7.05Q40.35 6.65 41.175 7.125Q42 7.6 42 8.6V36.85Q42 37.4 41.625 37.8Q41.25 38.2 40.7 38.4ZM28.9 38.25V13L19.1 9.7V34.95ZM31.9 38.25 39 35.9V10.3L31.9 13ZM9 37.65 16.1 34.95V9.7L9 12.05ZM31.9 13V38.25ZM16.1 9.7V34.95Z" /></svg>
const sendButton = <svg id='sendButton' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" /></svg>


const Footer = ({footerData}) => {
    return (
        <div className='Footer'>
            <div className="PreFooter">
                <div>
                    {repeatIcon}
                    <p>
                        <b>Hassle-free replacement</b><br />10-day easy replacement policy on mi.com
                    </p>

                </div>
                <div>
                    {shieldIcon}
                    <p>
                        <b>100% secure payaments</b><br />we support Cards, Wallet, EMI and COD
                    </p>

                </div>
                <div>
                    {paperMap}
                    <p>
                        <b>Vast servies network</b><br />1000 Mi service-centers across 600 cities
                    </p>

                </div>
            </div>
            <div className="middleFooter">
                <div>
                    <div>
                        <p>
                            <b>LET'S STAY IN TOUCH</b><br />
                            Get updateson sales specials and more
                        </p>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Email Address' />
                        {sendButton}
                        {/* <FaAngleRight/> */}
                    </div>
                </div>

                <div>
                    <div>
                        <p>
                            <b>FOLLOW MI</b><br />
                            We want to hear from you
                        </p>
                    </div>
                    <div>
                        <FaFacebookF id='social' />
                        <FaYoutube id='social'/>
                        <FaInstagram id='social'/>
                        <FaTwitter id='social'/>
                    </div>

                </div>

            </div>
            <div className="lastFooter">
                <div className="support">
                    <h3>SUPPORT</h3>
                    {footerData.support.map((item, index) => (
                        <a href={item.url}><p>{item.name}</p></a>
                    ))}
                </div>
                <div className="shopAndLearn">
                    <h3>SHOP AND LEARN</h3>
                    {footerData.shopAndLearn.map((item, index) => (
                        <a href={item.url}><p>{item.name}</p></a>
                    ))}
                </div> 
                <div className="retailStore">
                    <h3>RETAIL STORE</h3>
                    {footerData.retailStore.map((item, index) => (
                        <a href={item.url}><p>{item.name}</p></a>
                    ))}
                </div> 
                <div className="aboutUs">
                    <h3>ABOUT US</h3>
                    {footerData.aboutUs.map((item, index) => (
                        <a href={item.url}><p>{item.name}</p></a>
                    ))}
                </div>
                <div className="contactUs">
                    <h3>CONTACT US</h3>
                    {footerData.contactUs.map((item, index) => (
                        <a href={item.url}><p>{item.name}</p></a>
                    ))}
                </div>
                <div className="chat">
                    <p>Chat with our Virtual AI Bot - Now in हिन्दी/English</p>
                    <button>CHAT NOW</button>
                </div>
            </div>
            <div className='footerLine'>
                <div></div>
                <p>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer