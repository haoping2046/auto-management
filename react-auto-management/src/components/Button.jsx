import React from 'react'
import { useNavigate } from 'react-router-dom';

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



// export {AddButton, CancelButton}