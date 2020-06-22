import React from 'react';
import NavBar from './Navbar';
import DashBoardPage from './components/dashboardPage';
import ExplorePage from './components/explorePage';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="content">
        <BrowserRouter>
            <NavBar />
            <div>
                <Switch>
                    <Route path="/" component={DashBoardPage} exact />
                    <Route path="/explorePage" component={ExplorePage} exact />
                </Switch>
            </div>
        </BrowserRouter>
        </div>


    );
}

export default App;
