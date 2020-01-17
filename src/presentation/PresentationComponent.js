import React from 'react';
import styled from "styled-components";

class PresentationComponent extends React.PureComponent {

    render() {
        return (
            <Container>
                <h1>Presentation</h1>
                <p>Blabla</p>
            </Container>
        );
    }
}

const Container = styled.div`
    padding: 5%;
`;

export default PresentationComponent;
