
import { Modal } from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import CarItem from './CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { DEFOLT_IMAGE, LIMIT_CAR_PAGE, arrayCheck, imgExists, numberFromText } from 'constans/constans';
import css from './CarList.module.css'
import {  useDispatch, useSelector } from 'react-redux';
import DatailCar from 'components/DatailCar/DatailCar';
import { getTrendingCar, totalCar } from 'api/api';
import { toast } from 'react-toastify';


const  CarList = ()=> {
 const [showModal, setShowModal] = useState(false);
 const [selectedCar, setSelectedCar] = useState(null); 
 const [url, setUrl] = useState(DEFOLT_IMAGE);
const [isAddFavorite, setIsAddFavorite] =useState(false);
const [page, setPage] = useState(1);
const [carTotal, setCarTotal] = useState(null);
const [intermediateResult, setIntermediateResult] = useState([]);
 
 const favorites = useSelector((state)=>state.results.favorites)
 const results = useSelector((state)=>state.results.results)
 const totalResult = useSelector((state)=>state.results.totalResult)
 const isLoading = useSelector((state)=>state.results.isLoading)
 const brandFilter = useSelector((state)=>state.results.brandFilter)
 const priceFilter = useSelector((state)=>state.results.priceFilter)
 const dispatch = useDispatch();



 const priceNumber = numberFromText(priceFilter);
 const showButton = results.length > 0 && results.length < carTotal;


 useEffect(() => {
  addData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page])

async function addData() {
  try {
dispatch({type:"catalog/setIsLoading", payload:true})
dispatch({type:'catalog/setBrandFilter', payload:''} )
dispatch({type:'catalog/setPriceFilter', payload:''} )
    const limit = LIMIT_CAR_PAGE;
    
    const newData = await getTrendingCar(page, limit);

    const newDataTotal = await totalCar();
    dispatch({type:'catalog/setTotalResult', payload:newDataTotal} )
      if(page===1){
        dispatch({type:'catalog/setResults', payload:newData})
        setIntermediateResult(newData)
      } else {
        const updatedResults = [...intermediateResult, ...newData];
        dispatch({ type: "catalog/setResults", payload: updatedResults });
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
  finally {dispatch({type:"catalog/setIsLoading", payload: false});

    }
  
  }



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
  
    const addNextPage =()=>{setPage(prevState => prevState + 1)}

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

    // const filterByName=(cars, targetMake)=> {
    //   const filteredCars=cars.filter(car => car.name === targetMake);
    //   return filteredCars;
    // }
    // const filterByPrice=(cars, targetPrice)=> {
    //   const filteredCars=cars.filter(car => car.price === targetPrice);
    //   return filteredCars;
    // }
    // const filterByNameAndPrice = (cars, targetMake, targetPrice)=> {
    //   const filteredCars = cars.filter(car => car.name === targetMake && car.price === targetPrice);
    //   return filteredCars;
    // }

// if (brandFilter!=='' && priceFilter==='') {
//   filterByName(totalResult, brandFilter)
// } else if(priceFilter!==''&& brandFilter===''){
//   filterByPrice(totalCar, priceFilter)
// } else if (priceFilter!==''&& brandFilter!==''){
//   filterByNameAndPrice(totalResult, brandFilter, priceFilter)
// }

   const filteredCars = totalResult.filter(
          (car) => car.make === brandFilter || numberFromText(car.rentalPrice) <= Number(priceNumber));
      
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
    {showButton&&
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
