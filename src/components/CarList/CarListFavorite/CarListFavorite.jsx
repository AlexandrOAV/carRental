import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';

import { Loader } from 'components/Loader/Loader';
import { DEFOLT_IMAGE, arrayCheck, imgExists } from 'constans/constans';
import css from './CarListFavorite.module.css';
import { useSelector } from 'react-redux';
import DatailCar from 'components/DatailCar/DatailCar';
import CarItem from '../CarItem/CarItem';
import { selectIsLoading } from 'redux/catalogReducer';

const CarListFavorites = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [url, setUrl] = useState(DEFOLT_IMAGE);
  const [isAddFavorite, setIsAddFavorite] = useState(false);
  const [storedFavorites, setStoredFavorites] = useState([]);

  const isLoading = useSelector(selectIsLoading);


useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setStoredFavorites(favoritesFromLocalStorage);
  }, []); 

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setStoredFavorites(favoritesFromLocalStorage);
    
  }, [isAddFavorite]); 


  const closeModal = () => setShowModal(false);

  const openModal = (car) => {
    setUrl(imgExists(car.img) ? car.img : DEFOLT_IMAGE);
    setSelectedCar(car);
    setShowModal(true);
  };

  const handleAddToFavorites = (car) => {
    const isFavorite = storedFavorites.some((favorite) => favorite.id === car.id);
    setIsAddFavorite(isFavorite);
    setIsAddFavorite(!isAddFavorite);
    if (isFavorite) {
      const newFavorites = storedFavorites.filter((favorite) => favorite.id !== car.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const newFavorites = [...storedFavorites, car];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
    };

  

  const showPoster = arrayCheck(storedFavorites);

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {showPoster &&
          storedFavorites.map((car) => (
            <CarItem
              key={nanoid(8)}
              isFavorite={isAddFavorite}
              car={car}
              alt={car.make}
              handleAddToFavorites={() => handleAddToFavorites(car)}
              openModal={() => openModal(car)}
            />
          ))}
      </ul>
      {showModal && selectedCar && (
        <Modal onClose={closeModal}>
          <DatailCar car={selectedCar} url={url} />
        </Modal>
      )}
    </section>
  );
};

export default CarListFavorites;
