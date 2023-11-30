
import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';

const Catalog = ()=> {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => {
     setShowModal(true);
   };
  return (
    <div>
      Catalog
      <button onClick={openModal}>Відкрити модальне вікно</button>
        {showModal &&
        <Modal onClose={closeModal}>
         Modal window
        </Modal>}
    </div>
  )
}

export default Catalog
