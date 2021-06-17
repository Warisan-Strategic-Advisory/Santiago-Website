import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Frontpage from "./views/Frontpage";
import Issues from "./views/Issues";

const App: React.FC = () => {
    return (
        <Router basename="/">
            <div>
                <Switch>
                    <Route path="/issues" component={Issues} />
                    <Route path="/" component={Frontpage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;