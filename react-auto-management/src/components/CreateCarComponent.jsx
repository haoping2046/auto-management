import React, { Component } from 'react'
import CarService from '../services/CarService';
import {CancelButton} from './Button';
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

      CarService.createCar(car).then(res => {
        this.props.navigation('/cars')
      })

    }    

    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 mt-4">
                <h3 className="text-center mt-3">Add Car</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="mb-0 mt-2">Make:</label>
                      <input placeholder="Make" name="make" className="form-control"
                        value={this.state.make} onChange={this.changeMakeHandler} />

                      <label className="mb-0 mt-2">Model:</label>
                      <input placeholder="Model" name="model" className="form-control"
                        value={this.state.model} onChange={this.changeModelHandler} />
                      
                      <label className="mb-0 mt-2">Year:</label>
                      <input placeholder="Year" name="year" className="form-control"
                        value={this.state.year} onChange={this.changeYearHandler} />

                      <button className="btn btn-primary btn-sm mt-3" onClick={this.saveCar}>Save</button>
                      {/* <SaveButton e={e} state={this.state} path={'/cars'}></SaveButton> */}
                      <CancelButton path={'/cars'}></CancelButton>
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