import React, { useState } from 'react'
import carImage from '../../images/carHome.png' 
import HomeMenu from 'components/HomeMenu/HomeMenu'
import css from './HomeBody.module.css'
import { Modal } from 'components/Modal/Modal';
import HomeModal from 'components/HomeModal/HomeModal';


const  HomeBody=()=> {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => {
     setShowModal(true);
   };

   
  return (
    <div>
      
        <HomeMenu/>
        <h1 className={css.head}>Homepage Car Rental</h1>
      <h2 className={css.head_slogan}>Dream cars for rent</h2>
      
        <button onClick={openModal}>Contacts</button>
      <img src={carImage} alt="car"  />
      
      {showModal &&
        <Modal onClose={closeModal}>
            <HomeModal/>
        </Modal>}
   </div>   )
    }
  

export default HomeBody
