import React, { Component } from 'react';
import CarService from '../services/CarService';
import {AddButton} from './Button';
import {Input, Search}  from './Search';

class ListCarsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            value: ""  
        }
    }

    componentDidMount() {
        CarService.getCars().then((res)=>{
            this.setState({cars: res.data});
        })
    }

    handleInput(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        CarService.findByMake(this.state.value)
          .then((res) => {
            this.setState({cars: res.data});
            console.log(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Auto data list</h2>
                <div className="row no-gutters justify-content-start">
                    <div className="col">
                        <AddButton path={'/add-car'}></AddButton>
                    </div>
                    
                    <div>
                        <form className="form-inline">
                            <Input handleInput={(e)=>this.handleInput(e)} value={this.state.value}></Input>
                            <Search handleClick={(e)=>this.handleClick(e)}></Search>
                        </form>
                    </div>
                </div>
                
                

                <div className="row no-gutters">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>make</th>
                                <th>model</th>
                                <th>year</th>
                                {/* <th>actions</th> */}
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