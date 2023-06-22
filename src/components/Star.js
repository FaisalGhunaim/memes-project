import React from 'react'

const Star = (props) => {
  return (
    <div>

      <img 
      src={props.isFillled}   
      onClick={props.handleClick}   
      />

    </div>
  )
}

export default Star