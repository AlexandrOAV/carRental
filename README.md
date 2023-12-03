This application allows you to familiarize yourself with and select a car for rent that will meet your requirements.
Add and save your favorite car

import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { DEFOLT_IMAGE, arrayCheck, imgExists } from 'constans/constans';
import css from './CarList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import DatailCar from 'components/DatailCar/DatailCar';

const CarList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [url, setUrl] = useState(DEFOLT_IMAGE);
  const [arrayCarFavorit, setArrayCarFavorit] = useState([]);
  const [favoritesMap, setFavoritesMap] = useState({});
  const [loading, setLoading] = useState(true);

  const results = useSelector((state) => state.results.results);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setArrayCarFavorit(storedFavorites);
    setLoading(false);
  }, []);

  useEffect(() => {
    const newFavoritesMap = {};
    arrayCarFavorit.forEach((car) => {
      newFavoritesMap[car.id] = true;
    });
    setFavoritesMap(newFavoritesMap);

    localStorage.setItem('favorites', JSON.stringify(arrayCarFavorit));
  }, [arrayCarFavorit]);

  const closeModal = () => setShowModal(false);

  const openModal = (car) => {
    setUrl(imgExists(car.img) ? car.img : DEFOLT_IMAGE);
    setSelectedCar(car);
    setShowModal(true);
  };

  const handleAddToFavorites = (car) => {
    if (favoritesMap[car.id]) {
      const newFavorites = arrayCarFavorit.filter((c) => c.id !== car.id);
      setArrayCarFavorit(newFavorites);
    } else {
      setArrayCarFavorit([...arrayCarFavorit, car]);
    }
  };

  const showPoster = arrayCheck(results);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className={css.container}>
      <ul className={css.list}>
        {showPoster &&
          results.map((car) => (
            <CarItem
              key={nanoid(8)}
              car={car}
              alt={car.make}
              handleAddToFavorites={() => handleAddToFavorites(car)}
              openModal={() => openModal(car)}
              isFavorite={favoritesMap[car.id]}
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

export default CarList;
