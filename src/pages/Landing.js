import { useEffect } from "react";
import petal1 from "../images/petal1.png";
import petal2 from "../images/petal2.png";
import petal3 from "../images/petal3.png";
import "../styles/Landing.css";

const Landing = () => {
    useEffect(() => {
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.15", 3000);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.25", 3100);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.35", 3200);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.5", 3300);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.65", 3400);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.75", 3500);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.85", 3600);
        setTimeout(() => document.getElementById("welcome").style.opacity = "0.95", 3700);
        setTimeout(() => {
            document.getElementById("welcome").style.opacity = "1";
            document.getElementById("welcome").disabled = false;
        }, 3800);
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