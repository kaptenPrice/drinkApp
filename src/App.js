import React from 'react';
import NavBar from './components/Navbar';
import DashBoardPage from './pages/dashboardPage';
import ExplorePage from './pages/explorePage';
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
