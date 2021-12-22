import React from 'react'
import { useNavigate } from 'react-router-dom';
import CarService from '../services/CarService';

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
  function save(e) {
      e.preventDefault();
      CarService.createCar(props.data).then(() => {
        navigate(props.path)
      })
  }
  return (
    <button className="btn btn-primary btn-sm mt-3" onClick={save}>Save</button>
  )
}
