import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Frontpage from "./views/Frontpage";
import Issues from "./views/Issues";
import About from "./views/About";
import Chai from "./views/initiatives/Chai";
import Contact from "./views/Contact";

const App: React.FC = () => {
    return (
        <Router basename="/">
            <div>
                <Switch>
                    <Route path="/issues" component={Issues} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/initiatives/cwc" component={Chai} />
                    <Route path="/" component={Frontpage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;