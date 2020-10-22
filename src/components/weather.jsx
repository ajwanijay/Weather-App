import React, { Component } from 'react';
import { getAllWeather } from '../services/fakeWeatherData';
import { compose } from "redux";
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from '../container/actions';
import { getCityInfo } from '../container/selectors';
import { store } from '../index';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            city: {},
            value: ""
        }
    };

    componentDidMount() {
        const data = getAllWeather()
        this.setState({ data: data });


        this.props.getDataSuccess(data);
        let ass = store.getState();


    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };



    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchSuccess(this.state.value)
        this.props.history.push("/city");

    };



    render() {


        const { flag } = this.state
        const data = this.state.data;
        const city = data.filter(c => c.name === "Los Angeles");


        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
              <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </React.Fragment>


        );
    }
}

const mapStateToProps = createStructuredSelector({
    // city: getCityInfo()
});
const mapDispatchToProps = dispatch => ({
    getDataSuccess: payload => dispatch(actions.getDataSuccess(payload)),
    getSearchSuccess: payload => dispatch(actions.getSearchSuccess(payload)),
    dispatch
});




const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);




// export default withRouter(Weather);
export default ((compose(withRouter, withConnect))(Weather));