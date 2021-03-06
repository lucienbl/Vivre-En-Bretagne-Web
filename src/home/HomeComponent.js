import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class HomeComponent extends React.PureComponent {

    render() {
      const { news, currentWeather } = this.props;

      return (
        <Container onClick={() => {}}>
          <Title>Présentation</Title>
          <Presentation>
            La Bretagne, une région située à l’extrême ouest de la France, est une péninsule vallonnée qui s’avance dans l’océan Atlantique. Sa côte sauvage s’étend sur des kilomètres : on y trouve des stations balnéaires comme la ville chic de Dinard ou la ville fortifiée de Saint-Malo, construite sur la Manche. La côte de granit rose est un lieu convoité pour les teintes uniques que prennent le sable et les roches. La Bretagne dispose également d’un grand nombre de menhirs (sorte de mégalithe) datant de la préhistoire.
          </Presentation>
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
            <Article onClick={() => window.open(article.url)} key={article.id}>
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
  width: 100%;
  font-size: 50px;
  text-align: left;
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

const Presentation = styled.div`
  margin-bottom: 30px;
`;

HomeComponent.propTypes = {
  news: PropTypes.array.isRequired,
  currentWeather: PropTypes.object.isRequired
};

export default HomeComponent;
