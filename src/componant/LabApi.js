import React from 'react'

function LabApi(props) {
  return (
    <div className='card'>
        <img src={props.img} alt=''/>
        <h3>{props.title}</h3>
    </div>
  )
}

export default LabApi