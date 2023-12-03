
import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { DEFOLT_IMAGE, arrayCheck, imgExists, numberFromText } from 'constans/constans';
import css from './CarList.module.css'
import {  useDispatch, useSelector } from 'react-redux';
import DatailCar from 'components/DatailCar/DatailCar';


const  CarList = ()=> {
 const [showModal, setShowModal] = useState(false);
 const [selectedCar, setSelectedCar] = useState(null); 
 const [url, setUrl] = useState(DEFOLT_IMAGE);
const [isAddFavorite, setIsAddFavorite] =useState(false);
 




 const favorites = useSelector((state)=>state.results.favorites)
 const results = useSelector((state)=>state.results.results)
 const isLoading = useSelector((state)=>state.results.isLoading)
 const brandFilter = useSelector((state)=>state.results.brandFilter)
 const priceFilter = useSelector((state)=>state.results.priceFilter)
 const dispatch = useDispatch();

 const priceNumber = numberFromText(priceFilter);
 

 useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  dispatch({ type: 'favorites/setFavorites', payload: storedFavorites });
}, [dispatch]);

  const closeModal = () => setShowModal(false);
  const openModal = (car) => {
    setUrl( imgExists(car.img) ? car.img : DEFOLT_IMAGE);
    setSelectedCar(car);
    setShowModal(true);
    };
  

    const handleAddToFavorites = (car) => {
      const isFavorite = favorites.some((favorite) => favorite.id === car.id);
      setIsAddFavorite(isFavorite);
      if (isFavorite) {
        
        const newFavorites = favorites.filter((favorite) => favorite.id !== car.id);
        dispatch({ type: 'favorites/setFavorites', payload: newFavorites });
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } else {
        
        const newFavorites = [...favorites, car];
        dispatch({ type: 'favorites/setFavorites', payload: newFavorites });
        localStorage.setItem('favorites', JSON.stringify(newFavorites));

      }
    }     

    const filteredCars = results.filter((car) => car.make === brandFilter && numberFromText(car.rentalPrice) <= Number(priceNumber));
   
   
    const renderArray = filteredCars.length === 0?results:filteredCars;

   const showPoster = arrayCheck(renderArray);

 
   return (
    <section className={css.container}>
       {isLoading && <Loader />}
       {filteredCars.length === 0 && (brandFilter!==''|| priceFilter!=="") &&
      <p className={css.filter_massage}>There is no car that meets your requirements </p>}
     <ul className={css.list}>
      {showPoster&&renderArray.map(car => 
      <CarItem 
      isFavorite={isAddFavorite}
      key={nanoid(8)} 
      car={car} 
      alt={car.make} 
      handleAddToFavorites={()=>handleAddToFavorites(car)}
      openModal={() => openModal(car)}/>)}
     </ul>  
        {showModal && selectedCar &&
       <Modal onClose={closeModal} >
         <DatailCar car={selectedCar} url={url}/>
       </Modal>
       }
    </section>
   )
}

export default CarList
