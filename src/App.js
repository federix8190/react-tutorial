import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import SideBar from './NavBar/SideBar';

import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import PageError from './components/PageError';
import PersonasPage from './pages/PersonasPage';
import PersonaFormPage from './pages/PersonaFormPage';
import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <NavBar />
                    <SideBar />
                    <Redirect from="/" to="/home" />
                    
                    <Switch>

                        <Route
                            path="/home"
                            component={Home} />
                        <Route exact
                            path="/page1"
                            render={() => <Page1 name="React Medellín" />} />
                        <Route exact
                            path="/page2"
                            render={() => <Page2 />} />
                        <Route exact
                            path="/page3"
                            render={() => <PersonaFormPage id="customers" />} />
                        <Route exact
                            path="/personas"
                            render={() => <PersonasPage id="customers" />} />

                        <Route component={PageError} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;