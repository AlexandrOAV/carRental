
import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { DEFOLT_IMAGE, imgExists } from 'constans/constans';
import css from './CarList.module.css'


const  CarList = ({results, isLoading})=> {
  const [showModal, setShowModal] = useState(false);
 const [selectedCar, setSelectedCar] = useState(null); 
 const [url, setUrl] = useState(DEFOLT_IMAGE);

  const closeModal = () => setShowModal(false);
  const openModal = (car) => {
    setUrl( imgExists(car.img) ? car.img : DEFOLT_IMAGE);
    setSelectedCar(car);
    setShowModal(true);
   
    
    };
  

   const showPoster = Array.isArray(results) && results.length > 0;

 
   return (
    <section className={css.container}>
       {isLoading && <Loader />}
     <ul className={css.list}>
      {showPoster&&results.map(car => 
      <CarItem 
      key={nanoid(8)} 
      car={car} 
      alt={car.make} 
      openModal={() => openModal(car)}/>)}
     </ul>  
        {showModal && selectedCar &&
       <Modal onClose={closeModal} >
        <img src={url} alt={selectedCar.make} />
       <p>Modal car {selectedCar.id}</p> 
       </Modal>
       }
    </section>
   )
}

export default CarList
