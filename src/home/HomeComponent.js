import React from 'react';
import styled from "styled-components";

class HomeComponent extends React.PureComponent {

    render() {
        return (
            <Container>
                <h1>Home</h1>
                <p>Welcome on our webpage!</p>
            </Container>
        );
    }
}

const Container = styled.div`
    padding: 5%;
`;

export default HomeComponent;
