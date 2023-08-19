import React, { useState } from 'react'
import Backdrop from './Backdrop'
import ModalPop from './ModalPop'

const ModalBase = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='modal-base'>
        <button className='btn3' onClick={() => setShowModal(!showModal)}>Show popup</button>
        {showModal && <Backdrop close={() => setShowModal(!showModal)} />}
        {showModal && <ModalPop close={() => setShowModal(!showModal)} />}
    </div>
  )
}

export default ModalBase