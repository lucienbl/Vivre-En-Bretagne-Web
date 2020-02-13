import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import HomeComponent from "./HomeComponent";
import * as selectors from './selectors';
import * as actionCreators from './actionCreators';

const mapStateToProps = (state) => ({
    news: selectors.news(state),
    currentWeather: selectors.currentWeather(state)
});

class HomeContainer extends React.Component {

    async componentDidMount(): void {
        const { dispatch } = this.props;
        await dispatch(actionCreators.loadNews());
        await dispatch(actionCreators.currentWeather());
    }

    render() {
        const { news, currentWeather } = this.props;

        return (
            <HomeComponent
                news={news}
                currentWeather={currentWeather}
            />
        );
    }
}

HomeContainer.propTypes = {
    dispatch: PropTypes.any.isRequired,
    news: PropTypes.array.isRequired,
    currentWeather: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HomeContainer);
