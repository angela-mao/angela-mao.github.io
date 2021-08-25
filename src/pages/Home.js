import selfie from "../images/selfie.jpg";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import petal1 from "../images/petal1.png";
import petal2 from "../images/petal2.png";

const Home = () => {
    return (
        <div className="background">
            <Header view="home"/>
            <section className="home">
                <img className="selfie" src={selfie} alt="Picture of Me"/>
                <div className="intro">
                    <h1>Welcome!</h1>
                    <p>Hello! My name is Angela Mao.</p>
                    <p>Welcome to my website. Here you can learn all about me, including my previous experience as well
                        as my goals and interests. </p>
                    <p>Feel free to reach out to me using my contact information at the bottom. I am currently looking
                    for a Winter 2022 internship!</p>
                    <p> </p>
                    <p className="signature">Angela Mao</p>
                </div>
            </section>
            <Footer/>
            <img className="first" src={petal1} alt="Petal 1"/>
            <img className="second" src={petal2} alt="Petal 2"/>
            <img className="third" src={petal1} alt="Petal 1"/>
            <img className="fourth" src={petal2} alt="Petal 2"/>
            <img className="fifth" src={petal1} alt="Petal 1"/>
            <img className="sixth" src={petal1} alt="Petal 1"/>
        </div>
    );
}

export default Home;