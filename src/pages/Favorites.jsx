import CarListFavorites from 'components/CarList/CarListFavorite/CarListFavorite';
import HomeMenu from 'components/HomeMenu/HomeMenu'
import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

const Favorites=()=> {
  
// const dispatch =useDispatch();

// const favorites = useSelector(state => state.results.favorites);


useEffect (()=>{
 
addDataFavorites()
}, []);

async function addDataFavorites(){

}


  return (
    <div>
      <HomeMenu/>
     <CarListFavorites/>
    </div>
  )
}

export default Favorites