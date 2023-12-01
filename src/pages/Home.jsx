import { getTrendingCar } from "api/api";
import HomeBody from "components/HomeBody/HomeBody";
import { Modal } from "components/Modal/Modal";
import React, { useState } from "react"
import { toast } from "react-toastify";

const Home = () => {
   const [showModal, setShowModal] = useState(false);
   const closeModal = () => setShowModal(false);
   const openModal = () => {
      setShowModal(true);
    };
  
    async function addData() {
      try {
       
        const newData = await getTrendingCar();
          if (newData.results === 0) {
          toast.error('Car not faund')
          return;
        }
        console.log(newData)
      } catch (error) {
        toast.error(`API NOT FAUND: ${error.message}`)
      } 
      }
      addData()
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