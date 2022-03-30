import React, { Component } from 'react';
import {CancelButton, SaveButton} from './Button';
import CarService from '../services/CarService';
import { useParams } from "react-router-dom";

class UpdateCarClassComponent extends Component {
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

    componentDidMount() {
        let {id} = this.props.params;
        CarService.getCarById(id).then( (res) => {
          
          let car = res.data;
          this.setState ({
              make : car.make,
              model : car.model,
              year : car.year
          });
        });
    }

    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 mt-4">
                <h3 className="text-center mt-3">Update Car</h3>
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

                      <SaveButton operation={'update'} path={'/cars'} data={{make: this.state.make, model: this.state.model, year: this.state.year}}></SaveButton>
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

 const UpdateCarComponent = (props) => (
    <UpdateCarClassComponent
        {...props}
        params={useParams()}
    />
);

export default UpdateCarComponent;

