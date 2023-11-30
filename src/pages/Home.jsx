import HomeBody from "components/HomeBody/HomeBody";
import { Modal } from "components/Modal/Modal";
import React, { useState } from "react"

const Home = () => {
   const [showModal, setShowModal] = useState(false);
   const closeModal = () => setShowModal(false);
   const openModal = () => {
      setShowModal(true);
    };
  
 
    return (
     <div>
        <HomeBody/>
        <h1>Homepage Car Rental</h1>
        <button onClick={openModal}>Відкрити модальне вікно</button>
        {showModal &&
        <Modal onClose={closeModal}>
         Modal window
        </Modal>
        }
     </div>
    )
  }
  
  export default Home;