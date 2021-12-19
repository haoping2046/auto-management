import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddCarButton() {
  let navigate = useNavigate()
  function addCar() {
      navigate('/add-car');
  }
  return (
    <button className="btn btn-primary" onClick={addCar}>Add a vehicle</button>
  )
}

export default AddCarButton