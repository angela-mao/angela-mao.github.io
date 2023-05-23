import { useEffect } from "react";
import branch from "../images/branch.png";
import menu from "../images/menu.png";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "../styles/Header.css";
import linkedin from "../images/linkedin.png";

const Header = (props) => {
    useEffect(() => {
        document.getElementById(props.view).classList.add("active");
    }, []);

    return (
        <header className="header">
            <a className="logo" href="/#/home">
                <img className="logo" src={branch} alt="Peach Blossom Branch"/>
            </a>
            <p className="name">angela mao.</p>
            <nav id="navBar" className="navBar">
                <a href="/#/home" id="home">Home</a>
                <a href="/#/about" id="about">About</a>
                <a href="/#/experience" id="experience">Experience</a>
                <a href="https://drive.google.com/file/d/1TA7Usf2iELwIl23DIhgjeOKahy2iAPfd/view?usp=sharing" id="resume">Resume</a>
                <DropdownButton id="icon" title={<img className="menu" src={menu} alt="Menu"/>}>
                    <Dropdown.Item href="/#/home" id="item1">Home</Dropdown.Item>
                    <Dropdown.Item href="/#/about" id="item2">About</Dropdown.Item>
                    <Dropdown.Item href="/#/experience" id="item3">Experience</Dropdown.Item>
                    <Dropdown.Item href="https://drive.google.com/file/d/1TA7Usf2iELwIl23DIhgjeOKahy2iAPfd/view?usp=sharing" id="item4">Resume</Dropdown.Item>
                </DropdownButton>
            </nav>
        </header>
    );
}

export default Header;