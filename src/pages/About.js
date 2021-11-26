import "../styles/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import polaroid from "../images/polaroid.jpg";
import petal1 from "../images/petal1.png";
import petal2 from "../images/petal2.png";

const About = () => {
    return (
        <div className="background">
            <Header view="about"/>
            <section className="about">
                <h1>about me.</h1>
                <p>UW Computer Science</p>
                <div className="progress">
                    <div className="year1"></div>
                    <div className="year2"></div>
                    <div className="year3"></div>
                    <div className="year4"></div>
                    <div className="year5"></div>
                </div>
                <div className="paragraphs">
                    <p>
                        I am currently a second year student in the Computer Science Co-op program at the University of
                        Waterloo who is interested in making a positive impact on people's lives. For Winter 2022, I
                        will be taking on the position of Developer at RBC. I am looking for a Fall 2022 internship that
                        allows me to join a supportive team where I can collaborate with motivated, talented individuals
                        and grow professionally. I would like to be able to have fun problem solving with my team
                        members while learning and finding ways to help others through our work 💻.
                    </p>
                    <p>
                        I first started thinking about a future in the technology industry when I took a computer science
                        course in grade 10. I was always someone who enjoyed problem solving and logical thinking so as
                        I was programming, I realized that this was right up my alley :)
                    </p>
                    <p>
                        Although it can be difficult when you're coding as there are often a lot of bugs, the
                        satisfaction that I get whenever I see the final product or solve a problem will never get old.
                        I enjoy being able to create something that I envision, just like this website!
                    </p>
                    <p>
                        In the future, I hope to be able to use my skills for social good, such as improving people's
                        quality of life or contributing to the healthcare industry, specifically medical technology.
                        Other areas I am interested in is Internet of Things and DevOps.
                    </p>
                    <div className="interests">
                        <img className="polaroid" src={polaroid} alt="Polaroid"/>
                        <p>
                            Other than programming in my free time, I have other interests as well! I enjoy laughing and
                            talking with my friends and family. I also love travelling, reading and singing! At times,
                            my artistic side comes out too :) Sometimes when I do not like how the polaroids that I took
                            turned out, I will paint over them and draw on them. The polaroid on the side is one of
                            these pieces. The writing on the right side is the word for "peach blossoms" in Mandarin.
                        </p>
                    </div>
                    <p>Feel free to reach out to me if you have any questions!✨</p>
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

export default About;