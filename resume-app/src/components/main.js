import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects  from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/resume" component={LandingPage}></Route>
        <Route path="/resume/aboutme" component={About}></Route>
        <Route path="/resume/contact" component={Contact}></Route>
        <Route path="/resume/projects" component={Projects}></Route>
        <Route path="/resume/resume" component={Resume}></Route>
    </Switch>

)
 
export default Main;