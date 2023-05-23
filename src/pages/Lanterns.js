import lantern from "../images/lantern.png";
import moon from "../images/moon.png";
import "../styles/Lanterns.css";

const Lanterns = () => {
    return (
        <div className="sky">
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="bigStar"></div>
            <div className="smallStars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a href="/#/about" id="moon">
                <img src={moon} alt="Moon" className="moon"/>
            </a>
            <div className="big">
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
            </div>
            <div className="small">
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
                <img src={lantern} alt="Lantern"/>
            </div>
        </div>
    );
}

export default Lanterns;