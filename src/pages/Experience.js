import "../styles/Experience.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import interviewRoom from "../images/interviewRoom.png";
import voiceflow from "../images/voiceflow.png";
import sudoku1 from "../images/sudoku1.png";
import sudoku2 from "../images/sudoku2.png";
import sudoku3 from "../images/sudoku3.png";
import rpgOutput from "../images/rpgOutput.png";
import petal1 from "../images/petal1.png";
import petal2 from "../images/petal2.png";
import reactCSS from "../images/Mediamodifier-React + CSS.png";
import programmer from "../images/Mediamodifier-Programmer.png";

const Experience = () => {
    return (
        <div className="background">
            <Header view="experience"/>
            <section className="experience">
                <h1>my experience.</h1>
                <p>The following projects and work experience are listed in reverse chronological order.</p>
                <h2>personal website</h2>
                <p className="dates">august 2021 - present</p>
                <img className="reactCSS" src={reactCSS} alt="React + CSS"/>
                <div className="paragraphs">
                    <p>
                        This website is an ongoing project and was built using React, CSS and GitHub Pages. Feel free to
                        look around :)
                    </p>
                </div>
                <div className="divider"></div>
                <h2>product lead</h2>
                <p className="dates">march 2023 - present</p>
                <div className="paragraphs">
                    <p>
                        Currently working as a Product Lead at Develop for Good! Stay tuned for more :)
                    </p>
                </div>
                <div className="divider"></div>
                <h2>cloud software developer</h2>
                <p className="dates">september 2022 - december 2022</p>
                <div className="paragraphs">
                    <p>
                        I worked as a Cloud Software Developer on the Platform Services team at Wind River for the Wind
                        River Cloud Platform (WRCP). Simply put, the WRCP allows customers to deploy and manage secure
                        distributed cloud networks, as well as manage edge clouds.
                    </p>
                    <p>
                        During my time there, I was able to adapt rapidly and seamlessly run through the onboarding
                        process while using and <b>updating</b> existing training documentation. This allowed me to be
                        more productive and spend more time on my main project. Given a set of requirements, I designed
                        the algorithm and decision tree for a new command line tool that analyzed log messages from the
                        cloud networks deployed by the WRCP to determine and report <b>20+</b> system failures and their
                        root causes. It also reported significant events, such as servers failing to recover, and state
                        changes, like servers disabling. Then, I implemented this new tool using <b>Python</b>,
                        <b> object-oriented programming</b>, and the <b>Linux shell</b>. This tool decreased
                        time spent by customers, the product verification team and the platform team for debugging and
                        issue triaging by over <b>90%</b>. I also focused heavily on the usability of the tool by
                        ensuring that the results printed were concise and meaningful, having the tool automatically
                        extract archives of log messages, and packaging it into the Debian-based solution of StarlingX,
                        an <b>open-source</b> cloud platform, which the WRCP is a commercial offering of.
                    </p>
                    <p>
                        Overall, I was able to experience building a product from end-to-end. I prototyped and tested
                        the tool using <b>fault injection testing</b> and <b>virtualization</b> technology to create
                        <b> Linux virtual machines</b>, as well as incorporated feedback from design reviews, and demos.
                        The code was posted to <b>Gerrit</b> for review, and finally, it was merged into StarlingX.
                        Throughout the term, I took the initiative to develop a plan for implementation and executed it
                        to meet preset deadlines, while consistently updating the high-level design document for the
                        tool.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>backend developer</h2>
                <p className="dates">february 2022 - may 2022</p>
                <div className="paragraphs">
                    <p>
                        Develop for Good is a nonprofit organization that strives "to create social impact" by helping
                        develop applications or digital tools for other nonprofit organizations.
                        Check them out <a href="https://developforgood.org/">here</a>.
                    </p>
                    <p>
                        I specifically volunteered with The Pathway Initiative nonprofit organization to help develop
                        the backend of their mobile application that matched minority or disadvantaged students with
                        mentors to guide them on their path of studying medicine. This was done using the
                        <b> AWS Management Console</b> and the <b>Amplify CLI</b>. The specific AWS services that I used
                        were <b>API Gateway</b> and <b>DynamoDB</b>. I helped add a database that would map the
                        relationships between mentors and mentees as well as updated the fields of the user database.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>developer</h2>
                <p className="dates">january 2022 - april 2022</p>
                <div className="paragraphs">
                    <p>
                        I worked as a Developer on the RBC Wealth Management Technology & Solutions (WMTS) Trading
                        Systems team. During my time there, I was recognized as one of RBC's top talent and was one of
                        around <b>10</b> students who were showcased to the Executive Vice President of Innovation &
                        Technology at RBC and his leadership team.
                    </p>
                    <p>
                        As a part of the team, I helped generate data pipelines that parsed and ingested <b>4500+ </b>
                        log events into <b>Elasticsearch</b> by using the Elastic stack. I also deployed
                        <b> Logstash</b> into the development and QA environment on <b>OpenShift Container Platform </b>
                        while incorporating <b>HashiCorp Vault</b> to store secrets. All of my work helped the team
                        centralize information which allowed the support team to troubleshoot and I furthered the team's
                        progress of <b>transitioning to the cloud</b>.
                    </p>
                    <p>
                        Some of the other things that I worked on included editing the dropdowns on the team's <b>Angular
                        GUI</b> used to pull up trade events, deploying to the development environment using
                        <b> Jenkins</b> and <b>Urban Code Deploy</b>, writing <b>Python</b> scripts, and developing
                        <b> Proof of Concepts</b>. During the four months that I worked there, I consistently documented
                        my work and tracked my progress using <b>Confluence</b> and <b>JIRA</b>.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>full stack developer</h2>
                <p className="dates">may 2021 - august 2021</p>
                <div className="paragraphs">
                    <p>
                        I had the opportunity to work at Opal, LLC. which is a start up based in California. I was a
                        part of the Social Media department which was in charge of creating Opal's social media platform
                        from scratch.
                    </p>
                    <p>
                        Along with 6 other members in my department, I helped create the platform using <b>React</b>,
                        <b> Node.js/Express.js</b>, <b>npm</b> packages <i>axios</i> and <i>multer</i>, and a mock
                        database in <b>SQLite</b>. This was done through weekly meetings to decide on tasks for that
                        week and pushing code to the company repository after working on it locally. We often
                        collaborated with the Design department as we built the frontend of pages such as the user
                        profile based on their design mock-ups. We also collaborated with the Web/Blockchain department
                        to determine how the user's information was stored in the <b>Redux</b> store that they set up.
                    </p>
                    <p>
                        Throughout my time there, I worked on the frontend of <b>3+</b> pages, including making them
                        responsive. I also coded a form for users which would send all of the information and images to
                        the backend and save them in the database. I coded another page that could only be accessed by
                        admin where they could see the form data of each user so they can review and manage the data.
                        Lastly, in the backend, I coded up an algorithm using Promises and async/await that determined
                        each user's points based on <b>4+</b> factors (subject to NDA; no further details available).
                        During the few months that I was working there, I became very familiar with <b>REST </b>
                        endpoints as well as coding HTTP requests in the frontend.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>practice makes perfect (pmp)</h2>
                <p className="dates">june 2021 - july 2021</p>
                <div className="paragraphs">
                    <p>
                        I joined the UW CSCxDSC Project Program in the summer which was a month long event held by
                        the Computer Science club and Data Science club of the University of Waterloo that aimed at
                        helping students create a side project.
                    </p>
                    <p>
                        Working with 3 other team members as well as a mentor, we created a website that allows peers to
                        video call with each other and practice answering interview questions from a number of
                        categories, such as technical or financial. Users can also add their own categories and
                        questions. The website was created using <b>React</b>, <b>Node.js/Express.js</b>,
                        and <b>MySQL</b> after connecting to a remote database server on <b>AWS</b>.
                    </p>
                </div>
                <img className="images" src={interviewRoom} alt="Interview Room Screen"/>
                <div className="paragraphs">
                    <p>
                        During the month, I worked on creating the database to store our interview questions as well as
                        the different tables and schemas since we needed to store the questions and the categories they
                        fell under too. I also coded REST endpoints, specifically GET, which queried the database for
                        all the categories of questions in our database as well as a random question from specific
                        categories that the user selected. The GET requests were coded using the <b>npm</b> package
                        <em> axios</em>. I also helped a fellow team member with syncing questions across the screens of
                        the users in one room through working with event emitters in <b>Socket.io</b>. In the end, as a
                        team we presented to a panel of judges.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>to the 6ix</h2>
                <p className="dates">january 2021</p>
                <div className="paragraphs">
                    <p>
                        In January, I had the opportunity to participate in Canada's largest hackathon, Hack The North
                        2020++. With 3 other team members we created a voice application using VoiceFlow that assisted
                        users on activities that can be done in Toronto, such as restaurants to eat at, places to hang
                        out at with friends and places to stay overnight. We also created a website that explained our
                        application and had a link to the prototype (<a href="http://tothe6ix.me/">Go to website</a>).
                    </p>
                </div>
                <img className="images" src={voiceflow} alt="User Flow Map"/>
                <div className="paragraphs">
                    <p>
                        I helped my team plan as well as implement and connect the choice blocks in the user flow for
                        the voice application. The entire user flow map can be seen above. I also updated the "About"
                        page of our website with information about the voice application using <b>HTML</b> and different
                        <b> CSS</b> classes.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>sudoku</h2>
                <p className="dates">june 2018</p>
                <div className="paragraphs">
                    <p>
                        I coded a Harry Potter themed Graphical User Interface (GUI) application using <b>Java</b> that
                        allows the user to choose from 3 levels of sudoku puzzles to solve. Each puzzle gives the player
                        3 chances to successfully solve it. If they are unable to after 3 tries, the program will
                        automatically exit. Users are also given a restart button for each puzzle for if they want to
                        start the puzzle over. Multiple arrays were used to code this so that the application could
                        compare the player's answers to the solution and determine if they were correct. I also
                        implemented a progress bar on the main page where every time a level was successfully cleared,
                        it would increase until all 3 were solved.
                    </p>
                </div>
                <div className="imagesRow">
                    <img className="image1" src={sudoku1} alt="Main Screen with progress bar"/>
                    <img className="image2" src={sudoku2} alt="Difficulty Levels for Puzzles"/>
                    <img className="image3" src={sudoku3} alt="Puzzle Board Screen"/>
                </div>
                <div className="divider"></div>
                <h2>role-playing game</h2>
                <p className="dates">april 2018</p>
                <div className="paragraphs">
                    <p>
                        I coded a Angry Birds themed role-playing game (RPG) using <b>Java</b> where the user takes up
                        the role of Red and needs to successfully finish the mini-games in order to retrieve their egg
                        that was stolen by the pigs. I implemented a total of 6 mini-games which were unscrambling,
                        true/false questions, multiple choice, tic-tac-toe, math questions and rock-paper-scissors. For
                        tic-tac-toe and rock-paper-scissors, I had the program make random moves against the player and
                        I also ensured that the player had given a valid input. I also allowed users to choose to play
                        again if they ever lose at any of the mini-games. Lastly, I integrated a points system so
                        players would see how many points they accumulated when they lose as well as coded a function
                        that makes the text print slowly so players have time to read.
                    </p>
                </div>
                <img className="images" src={rpgOutput} alt="Screenshot of output at beginning of RPG"/>
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

export default Experience;