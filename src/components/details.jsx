import React, { Component } from 'react';
import * as actions from '../container/actions';
import { getCityInfo } from '../container/selectors';
import { compose } from "redux";
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { store } from '../index';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {},
            city: "",
            AllForecast: {}

        }
    };

    componentDidMount() {
        let cityName = store.getState().city;
        console.log("city", cityName)

        let data = store.getState().data;
        let City = {};
        data.map(a => {
            if (a.name.toLowerCase().includes(cityName)) {
                City = a;
            }

        })
        let forecast = City.forecast[0]
        this.setState({ city: City.name })
        this.setState({ forecast: forecast })
        this.setState({ AllForecast: City.forecast })
    }

    handleClick = () => {
        this.props.getForecastSuccess(this.state.AllForecast)
        this.props.history.push("/details");

    }



    render() {
        const { forecast, city } = this.state;
        console.log("details", forecast);
        console.log("city", city);
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Feels</th>
                            <th scope="col">Temprature</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>{city}</td>
                            <td>{forecast.Date}</td>
                            <td>{forecast.Time}</td>
                            <td>{forecast.feels}</td>
                            <td>{forecast.temprature}</td>

                        </tr>


                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary m-2" onClick={this.handleClick}>5 Day Weather</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    // city: getCityInfo()
});
const mapDispatchToProps = dispatch => ({

    getForecastSuccess: payload => dispatch(actions.getForecastSuccess(payload)),
    dispatch
});




const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);




export default ((compose(withRouter, withConnect))(Details));