

import { FaPhone, FaEnvelope } from "react-icons/fa"

import {GoLocation} from 'react-icons/go'
const Contact=()=>{
    return(
        <>
        <section className="contact">
            <h1>Contact me</h1>
                {/* <div class="map-section">
                    <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.0117455032141!2d77.95051303341184!3d9.587413536641368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012cbd13683e75%3A0x5e3d860fd12ca828!2sParapatti%20St%2C%20Sivagami%20Puram%2C%20Virudhunagar%2C%20Tamil%20Nadu%20626001!5e0!3m2!1sen!2sin!4v1633874296339!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
                </div> */}
            <ul>
                <li className="phone">
                    <a href="tel:6383252438"><FaPhone /> : +91 6383252438</a>
                </li>
                <li className="mail">
                    <a href="mailto:sanjeevkumar1805@outlook.com"><FaEnvelope />:  sanjeevkumar1805@outlook.com</a>
                </li>
                <li className="mail">
                    <a href="https://www.google.com/maps/place/Parapatti+St,+Sivagami+Puram,+Virudhunagar,+Tamil+Nadu+626001/@9.5874505,77.9484441,17z/data=!3m1!4b1!4m5!3m4!1s0x3b012cbd13683e75:0x5e3d860fd12ca828!8m2!3d9.5874505!4d77.9506328" target="_blank"
                                rel="noopenner noreferrer"><GoLocation />: 28, Parapatti street, Virudhunagar,Tamilnadu</a>
                </li>
            </ul>
        </section>
        </>
    )
}
export default Contact