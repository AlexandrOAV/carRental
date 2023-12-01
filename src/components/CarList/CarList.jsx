
import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';


const  CarList = ({results, isLoading})=> {
  const [showModal, setShowModal] = useState(false);
 const [selectedCar, setSelectedCar] = useState(null); 

  const closeModal = () => setShowModal(false);
  const openModal = (car) => {
    setSelectedCar(car);
    setShowModal(true);
    };
  

   const showPoster = Array.isArray(results) && results.length > 0;
   console.log("selectedCar", selectedCar);
   return (
    <section>
       {isLoading && <Loader />}
     <ul>
      {showPoster&&results.map(car => 
      <CarItem 
      key={nanoid(8)} 
      car={car} 
      alt={car.make} 
      openModal={() => openModal(car)}/>)}
     </ul>  
        {showModal && selectedCar &&
       <Modal onClose={closeModal} >
        <img src={selectedCar.img} alt={selectedCar.make} />
       <p>Modal car {selectedCar.id}</p> 
       </Modal>
       }
    </section>
   )
}

export default CarList
