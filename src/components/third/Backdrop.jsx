import React from 'react'

const Backdrop = (prop) => {
  return (
    <div className='backdrop' onClick={prop.close}></div>
  )
}

export default Backdrop