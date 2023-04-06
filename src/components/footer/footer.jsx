import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
        <h1>
            Eso es todo{" "}
            <a href="#home">
                <h2>
                    <BsMouse /> - Scroll Up -
                </h2>
            </a>
        </h1>
        <div className="social-links">
            <a href="https://www.instagram.com/sag_do_cerox/" target={"blank"}>
            <BsInstagram className="social" />
            </a>
            <a href="https://www.linkedin.com/in/sdx97/" target={"blank"}>
            {" "}
            <BsLinkedin className="social" />
            </a>

            <a href="https://www.youtube.com/channel/UCLP_1K47aSoE3jCIcwi_A4Q/" target={"blank"}>
            <TiSocialYoutube className="social" />
            </a>

            <a href="https://github.com/CesarGracia97" target={"blank"}>
            <TiSocialGithub className="social" />
            </a>
        </div>
        </div>
    );
}
export default Footer;
