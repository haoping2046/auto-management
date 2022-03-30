import React from 'react';

export const Input = (props) => {
  return (
      <input className="form-control mr-sm-2" type="search" placeholder="Search by make" aria-label="Search"
          onInput={(e)=>props.handleInput(e)} value={props.value}></input>
  )
}

export const Search = (props) => {
  return (
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" 
          onClick={(e) => props.handleClick(e)}>Search</button>
  )
}




