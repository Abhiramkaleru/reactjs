import React from 'react'

const First = (props) => {
  const{name,city,age,role}=props.person
  return (
    // <div>{props.name}</div>
    <div>
      <div>{name}</div>
      <div>{city}</div>
      <div>{age}</div>
      <div>{role}</div>
    </div>
  )
}

export default First


// rafce,rfce