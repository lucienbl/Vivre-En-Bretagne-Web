import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu } from "antd";
import { HomeScreen } from "./home";
import { PresentationScreen } from "./presentation";
import { ContactScreen } from "./contact";

const PATH_HOME = "/";
const PATH_PRESENTATION = "/presentation";
const PATH_PORTFOLIO = "/portfolio";
const PATH_CONTACT = "/contact";

class RootNavigator extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <Link to={PATH_HOME}>Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PATH_PRESENTATION}>Presentation</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PATH_PORTFOLIO}>Portfolio</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PATH_CONTACT}>Contact</Link>
                        </Menu.Item>
                    </Menu>
                    <Switch>
                        <Route path={PATH_PRESENTATION}>
                            <PresentationScreen />
                        </Route>
                        <Route path={PATH_PORTFOLIO}>
                            <HomeScreen />
                        </Route>
                        <Route path={PATH_CONTACT}>
                            <ContactScreen />
                        </Route>
                        <Route path={PATH_HOME}>
                            <HomeScreen />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RootNavigator;