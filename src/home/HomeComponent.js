import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class HomeComponent extends React.PureComponent {

    render() {
      const { news } = this.props;

        return (
            <Container>
              {news.map(article => (
                <Card>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  {article.urlToImage && <img style={{ maxHeight: 100, width: 'auto' }} src={article.urlToImage} />}
                </Card>
              ))}
            </Container>
        );
    }
}

const Container = styled.div`
    padding: 5%;
`;

const Card = styled.div`
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
`;

HomeComponent.propTypes = {
  news: PropTypes.array.isRequired
};

export default HomeComponent;
