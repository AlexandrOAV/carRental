
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import css from './CarList.module.css'
import { DEFOLT_IMAGE, LIMIT_CAR_PAGE, arrayCheck, imgExists, numberFromText } from 'constans/constans';
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import DatailCar from 'components/DatailCar/DatailCar';
import { getTrendingCar, totalCar } from 'api/api';

import { selectBrandFilter, selectFavorites, 
  selectIsLoading, 
  selectPriceFilter, 
  selectResults, 
  selectTotalResults, 
  setBrandFilter, 
  setFavorites, 
  setIsLoading, 
  setPriceFilter, 
  setResults, 
  setTotalResult
 } from 'redux/catalogReducer';


const  CarList = ()=> {
 const [showModal, setShowModal] = useState(false);
 const [selectedCar, setSelectedCar] = useState(null); 
 const [url, setUrl] = useState(DEFOLT_IMAGE);
const [isAddFavorite, setIsAddFavorite] =useState(false);
const [page, setPage] = useState(1);
const [carTotal, setCarTotal] = useState(null);
const [intermediateResult, setIntermediateResult] = useState([]);
 
 const favorites = useSelector(selectFavorites)
 const results = useSelector(selectResults)
 const totalResult = useSelector(selectTotalResults)
 const isLoading = useSelector(selectIsLoading)
 const brandFilter = useSelector(selectBrandFilter)
 const priceFilter = useSelector(selectPriceFilter)

 const dispatch = useDispatch();

 const priceNumber = numberFromText(priceFilter);
 const showButton = results.length > 0 && results.length < carTotal;


 useEffect(() => {
  addData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page]);

async function addData() {
  try {
dispatch(setIsLoading(true));
dispatch(setBrandFilter(''));
dispatch(setPriceFilter(''));

    const limit = LIMIT_CAR_PAGE;
    
    const newData = await getTrendingCar(page, limit);

    const newDataTotal = await totalCar();
    dispatch(setTotalResult(newDataTotal));

      if(page===1){
        dispatch(setResults(newData));
        setIntermediateResult(newData);
      } else {
        const updatedResults = [...intermediateResult, ...newData];
        dispatch(setResults(updatedResults));
        setIntermediateResult(updatedResults);
      }

    
    setCarTotal(newDataTotal.length);

    if (newData.length === 0) {
      toast.error('Car not faund')
      return;
    }
   
  } catch (error) {
    toast.error(`API NOT FAUND: ${error.message}`)
     } 
  finally {dispatch(setIsLoading(false));}
  }

 useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  dispatch(setFavorites(storedFavorites));
}, [dispatch]);

  const closeModal = () => setShowModal(false);
  const openModal = (car) => {
    setUrl( imgExists(car.img) ? car.img : DEFOLT_IMAGE);
    setSelectedCar(car);
    setShowModal(true);
    };
  
  const addNextPage =()=>{setPage(prevState => prevState + 1)}

    const handleAddToFavorites = (car) => {
      const isFavorite = favorites.some((favorite) => favorite.id === car.id);
      setIsAddFavorite(isFavorite);
      if (isFavorite) {
        
        const newFavorites = favorites.filter((favorite) => favorite.id !== car.id);
        dispatch(setFavorites(newFavorites));
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } else {
        const newFavorites = [...favorites, car];
        dispatch(setFavorites(newFavorites));
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }
    }     

   const filteredCars = totalResult.filter(
          (car) => car.make === brandFilter || numberFromText(car.rentalPrice) <= Number(priceNumber));
      
   const renderArray = filteredCars.length === 0?results:filteredCars;

   const showPoster = arrayCheck(renderArray);

 
   return (
    <section className={css.container}>
       {isLoading && <Loader />}
       {(filteredCars.length === 0 && priceNumber!=='' && brandFilter!=='' ) &&
      <p className={css.filter_massage}>
        There is no car that meets your requirements 
      </p>}
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
    {(showButton&& filteredCars.length === 0)&&
    <button 
      className={css.button_more} 
      type='button' 
      onClick={()=>addNextPage()}>
        Load more
    </button>} 
        {showModal && selectedCar &&
       <Modal onClose={closeModal} >
         <DatailCar car={selectedCar} url={url}/>
       </Modal>
       }
    </section>
   )
}

export default CarList
