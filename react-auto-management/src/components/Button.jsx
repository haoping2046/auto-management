import React from 'react'
import { useNavigate } from 'react-router-dom';
import CarService from '../services/CarService';
import { useParams } from "react-router-dom";

export const AddButton = (props) => {
  let navigate = useNavigate()
  function addCar() {
      navigate(props.path);
  }
  return (
    <button className="btn btn-primary mb-3" onClick={addCar}>Add a vehicle</button>
  )
}

export const  CancelButton = (props) => {
  let navigate = useNavigate()
  function cancel() {
      navigate(props.path);
  }
  return (
    <button className="btn btn-light btn-sm mt-3" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
  )
}

export const  SaveButton = (props) => {
  let navigate = useNavigate()
  const { id } = useParams();
  function save() {
      // e.preventDefault();
      if (props.operation === 'update') {
        CarService.updateCar(props.data, id).then(() => {
          navigate(props.path);
        })
      }
      else {
        CarService.createCar(props.data).then(() => {
          navigate(props.path);
        })
      }
      
  }
  return (
    <button className="btn btn-primary btn-sm mt-3" onClick={save}>Save</button>
  )
}

export const UpdateButton = (props) => {
  let navigate = useNavigate()
  function updateCar() {
      navigate(props.path + props.carID);
  }
  return (
    <button className="btn btn-info" onClick={updateCar}>Update</button>
  )
}

// export const DeleteButton = (props) => {
//   let navigate = useNavigate()
//   function deleteCar() {
//       CarService.deleteCar(props.id).then( res => {
//         // navigate(props.path);
//       } )
      
//   }
//   return (
//     <button className='btn btn-danger'style={{marginLeft: "10px"}} onClick={deleteCar}>Delete</button>
//   )
// }