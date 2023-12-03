
import { getTrendingCar } from 'api/api';
import CarList from 'components/CarList/CarList';
import FormSearch from 'components/FormSearch/FormSearch';
import HomeMenu from 'components/HomeMenu/HomeMenu';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Catalog = ()=> {

const dispatch = useDispatch();

  useEffect(() => {
    addData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 


  async function addData() {
    try {
      dispatch({type:"catalog/setIsLoading", payload:true})
   
      const newData = await getTrendingCar();
      dispatch({type:"catalog/setResults", payload:newData})
        if (newData.length === 0) {
        toast.error('Car not faund')
        return;
      }
         
    } catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
       } 
    finally {dispatch({type:"catalog/setIsLoading", payload: false})}
    }
  
  
  return (
    <>
      <HomeMenu/>
    <FormSearch/>
      <CarList />
    </>
  )
  }

export default Catalog
