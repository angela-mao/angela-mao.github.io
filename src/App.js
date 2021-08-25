import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Experience from "./pages/Experience.js";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact><Landing/></Route>
                    <Route path="/home" exact><Home/></Route>
                    <Route path="/about" exact><About/></Route>
                    <Route path="/experience" exact><Experience/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
