import React from "react";
import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/home/HomePage";
import CoursePage from "./components/course/CoursePage";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/common/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/courses" component={CoursePage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </>
    )
};

export default App;