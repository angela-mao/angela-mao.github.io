import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <p>
                    Feel free to reach out to me anytime or check out what I have done!
                </p>
                <div className="icons">
                    <a className="icon" href="mailto:angela.mao.am@gmail.com">
                        <img className="icon" src={mail} alt="E-mail"/>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/angelamao1004/">
                        <img className="icon" src={linkedin} alt="LinkedIn"/>
                    </a>
                    <a className="icon" href="https://github.com/angela-mao/">
                        <img className="icon" src={github} alt="GitHub"/>
                    </a>
                </div>
                <div className="disclaimer">
                    <span>DISCLAIMER:</span> Not all of these images are mine. Picture credits:&nbsp;
                    <a href="https://poesiesullalbero.blogspot.com/2019/10/perdono-alexander-shurbanov.html">
                        Branch in Header
                    </a>,&nbsp;
                    <a href="https://png.is/f/petal-rgb-color-model-download-cherry-blossom-petals-picture-material/5320030010998784-201812130648.html">
                        Falling Petals
                    </a>,&nbsp;
                    <a href="https://www.iconfinder.com/icons/2044284/menu_hamburger_icon">
                        Menu Icon
                    </a>,&nbsp;
                    <a href="https://www.iconfinder.com/icons/3586360/email_envelope_mail_send_icon">
                        Mail Icon
                    </a>,&nbsp;
                    <a href="https://www.iconfinder.com/icons/104452/linkedin_icon">
                        LinkedIn Icon
                    </a>,&nbsp;
                    <a href="https://www.iconfinder.com/icons/765246/github_media_social_icon">
                        GitHub Icon
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;