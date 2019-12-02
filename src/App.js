import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import MyApp from './components/MyApp';
import Grilla from './components/Grilla';
import GrillaPersonas from './components/GrillaPersonas';
import PageError from './components/PageError';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
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
                            render={() => <Grilla id="customers" />} />
                        <Route exact
                            path="/personas"
                            render={() => <GrillaPersonas id="customers" />} />

                        <Route component={PageError} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;