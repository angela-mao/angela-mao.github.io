import { useEffect } from "react";
import petal1 from "../images/petal1.png";
import petal2 from "../images/petal2.png";
import petal3 from "../images/petal3.png";
import "../styles/Landing.css";

const Landing = () => {
    useEffect(() => {
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.15", 2500);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.25", 2600);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.35", 2700);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.5", 2800);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.65", 2900);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.75", 3000);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.85", 3100);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.95", 3200);
        setTimeout(() => {
            document.getElementById("welcome").style.opacity = "1";
            document.getElementById("welcome").disabled = false;
        }, 3300);
    }, []);

    return (
        <div className="fallingPetals">
            <img src={petal1} alt="Petal 1"/>
            <img src={petal2} alt="Petal 2"/>
            <img src={petal1} alt="Petal 1"/>
            <img src={petal3} alt="Petal 3"/>
            <img src={petal1} alt="Petal 1"/>
            <img src={petal2} alt="Petal 2"/>
            <img src={petal3} alt="Petal 3"/>
            <img src={petal1} alt="Petal 1"/>
            <img src={petal2} alt="Petal 2"/>
            <img src={petal3} alt="Petal 3"/>
            <img src={petal1} alt="Petal 1"/>
            <img src={petal2} alt="Petal 2"/>
            <img src={petal1} alt="Petal 1"/>
            <img src={petal3} alt="Petal 3"/>
            <img src={petal1} alt="Petal 1"/>
            <div className="blurredPetals">
                <img src={petal2} alt="Petal 2"/>
                <img src={petal1} alt="Petal 1"/>
                <img src={petal3} alt="Petal 3"/>
                <img src={petal2} alt="Petal 2"/>
                <img src={petal1} alt="Petal 1"/>
                <img src={petal1} alt="Petal 1"/>
            </div>
            <a href="/#/home">
                <button type="button" id="welcome" disabled>Welcome</button>
            </a>
        </div>
    );
}

export default Landing;