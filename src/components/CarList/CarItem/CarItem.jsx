import React from 'react'
import css from './CarItem.module.css'
import { DEFOLT_IMAGE, imgExists } from 'constans/constans';

const CarItem = ({car, alt, openModal}) => {
  const {
    id,
    year, 
    make, 
    model, 
    type, 
    img, 
    address, 
    rentalCompany, 
    functionalities, 
    rentalPrice  } = car;


const url =  imgExists(img) ? img : DEFOLT_IMAGE;
const addresArray = address.split(',');
const city = addresArray[1];
const country = addresArray[2];
  
return (
    <li>
     
       <img className={css.item_image} src={url} width={200} alt={alt} />
       <div>
        <h2>{make} {model}, {year}</h2>
       <p>{rentalPrice}</p>
       </div>
       <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        {rentalCompany==="Luxury Car Rentals" && <li>Premium</li>}
       </ul>
       <ul>
        <li><span className={css.text_type}>{type}</span></li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
       </ul>
       <button type="button" onClick={() => openModal(car)}>Learn more</button>
    </li>
  )
}

export default CarItem
