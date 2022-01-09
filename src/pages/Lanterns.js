import lantern from "../images/lantern.png";
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