import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import HomeComponent from "./HomeComponent";
import * as selectors from './selectors';
import * as actionCreators from './actionCreators';

const mapStateToProps = (state) => ({
    news: selectors.news(state),
});

class HomeContainer extends React.Component {

    async componentDidMount(): void {
        const { dispatch } = this.props;
        await dispatch(actionCreators.loadNews());
    }

    render() {
        const { news } = this.props;

        return (
            <HomeComponent
                news={news}
            />
        );
    }
}

HomeContainer.propTypes = {
    dispatch: PropTypes.any.isRequired,
    news: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HomeContainer);
