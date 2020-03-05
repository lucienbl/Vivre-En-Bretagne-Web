import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class HomeComponent extends React.PureComponent {

    render() {
      const { news, currentWeather } = this.props;

      console.log(currentWeather);

      return (
        <Container onClick={() => {}}>
          {currentWeather.main && (
            <>
              <Title>La Météo</Title>
              <Weather>
                <WeatherTemperatureTitle>{Math.round(currentWeather.main.temp)}°C</WeatherTemperatureTitle>
                <WeatherIcon src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
              </Weather>
            </>
          )}
          <Title>Les Actualités</Title>
          {news.map(article => (
            <Article key={article.id}>
              {article.urlToImage && <ArticleImage src={article.urlToImage} />}
              <ArticleContentContainer>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
              </ArticleContentContainer>
            </Article>
          ))}
        </Container>
      );
    }
}

const Container = styled.div`
    flex: 1;
    padding: 50px 5% 5% 5%;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: black;
  float: left;
`;

const Article = styled.div`
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Weather = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
`;

const ArticleImage = styled.img`
  max-height: 200px;
  width: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ArticleContentContainer = styled.div`
  margin: 20px;
`;

const WeatherTemperatureTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #666;
`;

const WeatherIcon = styled.img`
  margin-left: 10px;
  margin-top: -12px;
  height: 70px;
  width: auto;
  opacity: 0.8;
`;

HomeComponent.propTypes = {
  news: PropTypes.array.isRequired,
  currentWeather: PropTypes.object.isRequired
};

export default HomeComponent;
