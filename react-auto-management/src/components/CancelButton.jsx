import React from 'react'
import { useNavigate } from 'react-router-dom';

function CancelButton() {
  let navigate = useNavigate()
  function cancel() {
      navigate('/cars');
  }
  return (
    <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
  )
}

export default CancelButton