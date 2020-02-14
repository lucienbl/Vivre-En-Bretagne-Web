import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";
import { HomeScreen } from "./home";
import { PresentationScreen } from "./presentation";
import { ContactScreen } from "./contact";
import HeadVideo from "./assets/head_video.mp4";

const PATH_HOME = "/";
const PATH_PRESENTATION = "/presentation";
const PATH_PORTFOLIO = "/portfolio";
const PATH_CONTACT = "/contact";

class RootNavigator extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <video height="200" style={{ width: "100%", objectFit: "fill" }} autoPlay loop>
                        <source src={HeadVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> 
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
    margin-left: 5%;
    font-size: 50px;
    color: white;
    position: absolute;
    top: 60px;
    left: 5;
`;

export default RootNavigator;
