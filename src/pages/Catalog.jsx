
import { getTrendingCar } from 'api/api';
import CarList from 'components/CarList/CarList';
import HomeMenu from 'components/HomeMenu/HomeMenu';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Catalog = ()=> {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);


  useEffect(() => {
    addData()
  }, [])
 


  async function addData() {
    try {
      setIsLoading(true);
      const newData = await getTrendingCar();
    
        if (newData.lenth === 0) {
        toast.error('Car not faund')
        return;
      }
      setResults(newData)
      console.log(newData)
      
    } catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false);}
    }
  
    console.log('results', results)
  return (
    <>
      <HomeMenu/>
      Catalog
      <CarList
      isLoading={isLoading}
      results={results}
      />
    </>
  )
  }

export default Catalog
