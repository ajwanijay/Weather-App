import React, { Component } from 'react';
import { store } from '../index';

class FiveDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: [],
            city: ""

        }
    };

    componentDidMount() {
        let forecast = store.getState().forecast;
        let city = store.getState().city;
        console.log("forecast", forecast)

        this.setState({ city: city });
        this.setState({ forecast: forecast });

    }

    render() {
        const { forecast, city } = this.state

        return (
            <React.Fragment>
                <h1>Five Days - details of : {city} </h1>
                <table className="table">
                    <thead>
                        <tr>


                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Feels</th>
                            <th scope="col">Temprature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecast.map(f =>
                            <tr key={f.date}>


                                <td>{f.Date}</td>
                                <td>{f.Time}</td>
                                <td>{f.feels}</td>
                                <td>{f.temprature}</td>

                            </tr>
                        )}


                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default FiveDay;