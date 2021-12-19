import React, { Component } from 'react'
import CarService from '../services/CarService';
import CancelButton from './CancelButton';
import { useNavigate } from 'react-router-dom';

class CreateCarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          make: '',
          model: '',
          year: '',
        }
    }

    changeMakeHandler = (event) => {
      this.setState({make: event.target.value});
    }

    changeModelHandler = (event) => {
      this.setState({model: event.target.value});
    }
    
    changeYearHandler = (event) => {
      this.setState({year: event.target.value});
    }
    
    saveCar = (e) => {
      e.preventDefault();
      let car = { make: this.state.make, model: this.state.model, year: this.state.year }
      console.log('car =>' + JSON.stringify(car));
      console.log(this.props.navi)
      CarService.createCar(car).then(res => {
        this.props.navigation('/cars')
      })

    }    

    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Add Car</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Make:</label>
                      <input placeholder="Make" name="make" className="form-control"
                        value={this.state.make} onChange={this.changeMakeHandler} />

                      <label>Model:</label>
                      <input placeholder="Model" name="model" className="form-control"
                        value={this.state.model} onChange={this.changeModelHandler} />
                      
                      <label>Year:</label>
                      <input placeholder="Year" name="year" className="form-control"
                        value={this.state.year} onChange={this.changeYearHandler} />

                      <button className="btn btn-success" onClick={this.saveCar}>Save</button>
                      <CancelButton></CancelButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

// useNavigate just can be used in functional component, so I have to wrap and export
export default function AddCar(props) {
  const navigation = useNavigate();
  return <CreateCarComponent {...props} navigation={navigation} />;
}