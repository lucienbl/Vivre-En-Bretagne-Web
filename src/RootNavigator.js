import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";
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
                    <HeaderImage src="https://frederic-pactat.com/wp-content/uploads/2017/01/201701-bretagne.jpg" />
                    <HeaderTitle>Vivre En Bretagne</HeaderTitle>
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

const HeaderImage = styled.img`
    height: 200px;
    object-fit: cover;
    width: 100%;
`;

const HeaderTitle = styled.h1`
    font-size: 50px;
    color: white;
    position: absolute;
    top: 60px;
    left: 5;
`;

export default RootNavigator;
