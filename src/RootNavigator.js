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
const PATH_CONTACT = "/contact";

class RootNavigator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            muted: true
        }
    }

    _toggleMute = () => this.setState({ muted: !this.state.muted });


    render() {
        const { muted } = this.state;

        return (
            <Router>
                <div>
                    <video height="200" style={{ width: "100%", objectFit: "cover" }} autoPlay loop muted={muted}>
                        <source src={HeadVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <HeaderTitle>Vivre En Bretagne</HeaderTitle>
                    <SoundControlContainer>
                        {muted ? (
                          <i onClick={this._toggleMute} className="material-icons" style={{ color: "white" }}>
                              volume_up
                          </i>
                        ) : (
                          <i onClick={this._toggleMute} className="material-icons" style={{ color: "white" }}>
                              volume_off
                          </i>
                        )}
                    </SoundControlContainer>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <Link to={PATH_HOME}>Accueil</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PATH_PRESENTATION}>Presentation</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PATH_CONTACT}>Nous contacter</Link>
                        </Menu.Item>
                    </Menu>
                    <Switch>
                        <Route path={PATH_PRESENTATION}>
                            <PresentationScreen />
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

const SoundControlContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
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
