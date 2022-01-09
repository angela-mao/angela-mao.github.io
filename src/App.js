import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Experience from "./pages/Experience.js";
import Lanterns from "./pages/Lanterns";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact><Landing/></Route>
                    <Route path="/home" exact><Home/></Route>
                    <Route path="/about" exact><About/></Route>
                    <Route path="/experience" exact><Experience/></Route>
                    <Route path="/lanterns" exact><Lanterns/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
