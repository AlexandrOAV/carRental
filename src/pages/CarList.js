import Modal from 'components/Modal/Modal'
import React, { useState } from 'react';

const CarList = ()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
       setModalIsOpen(true);
     };
   
     const closeModal = () => {
       setModalIsOpen(false);
     };
  return (
    <div>
      carList
      <button type='button' onClick={openModal}>open modal</button>
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
         <h2>Auto</h2>
        </Modal>
    </div>
  )
}

export default CarList
