import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contactame</h1>
        <div className="contact-links">
            <a href="https://www.youtube.com/channel/UCLP_1K47aSoE3jCIcwi_A4Q" className="contact youtube" target={"blank"}>
                <AiOutlineYoutube className="icon" />
                <h2> Youtube <span>SdX-97</span></h2>
            </a>
            <a href="https://api.whatsapp.com/send?phone=593990344916&text=Hi" className="contact whatsapp" target={"blank"}>
                <AiOutlineWhatsApp className="icon" />
                <h2> Whatsapp <span>+593 99 034 4916</span></h2>
            </a>
            <a href="https://www.instagram.com/sag_do_cerox/" className="contact instagram" target={"blank"}>
                <AiOutlineInstagram className="icon" />
                <h2>Instagram <span>sag_do_cerox</span></h2>
            </a>
      </div>
    </div>
    );
}

export default Contact;
