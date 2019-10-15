import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Login } from './views/Login';
import { TopicList } from './views/TopicList';
import { NoMatch } from './views/NoMatch';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";


function Routes () {

  return (
    <div className="container-fluid">
     <Router>
                                            <div>
                                            <ul class="navbar-nav ml-auto">
                                                <li class="nav-item active">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                                <li class="nav-item active">
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li class="nav-item active">
                                                    <Link to="/login">Login</Link>
                                                </li>
                                            </ul>
                                            </div>
                                        </Router>


                                        <Switch>
                                            <Route exact path="/" component={Home} />
                                            <Route path="/about" component={About} />
                                            <Route path="/login" component={Login} />
                                            <Route component={NoMatch} />
                                        </Switch>
    </div>
  );
}
