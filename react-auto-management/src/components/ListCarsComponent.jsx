import React, { Component } from 'react';
import CarService from '../services/CarService';
import AddCarButton from './AddCarButton';

class ListCarsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        CarService.getCars().then((res)=>{
            this.setState({cars: res.data});
        })
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Auto data list</h2>
                <div className="row">
                    <AddCarButton></AddCarButton>
                </div>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>make</th>
                                <th>model</th>
                                <th>year</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cars.map(
                                    car => 
                                    <tr key = {car.id}>
                                        <td>{car.id}</td>
                                        <td>{car.make}</td>
                                        <td>{car.model}</td>
                                        <td>{car.year}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default ListCarsComponent;