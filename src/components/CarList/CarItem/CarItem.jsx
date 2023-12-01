import React from 'react'
import css from './CarItem.module.css'
import { ReactComponent as Heart } from '../../../images/heart.svg';
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
    accessories, 
    rentalPrice  } = car;


const url =  imgExists(img) ? img : DEFOLT_IMAGE;
const addresArray = address.split(',');
const city = addresArray[1];
const country = addresArray[2];
const randomInteger = Math.floor(Math.random() * 3);

return (
    <li className={`${css.car_item} ${css.card_container}`}>
   
      <div className={css.item_image_block}>
      <Heart onClick={() => openModal(car)} className={css.heart_icon} />
      <img className={css.item_image} src={url} width={200} alt={alt} />
      </div>
      
       <div className={css.item_name}>
        <h2 className={css.item_head}>{make} <span className={css.item_model}>{model}</span>, {year}</h2>
       <p>{rentalPrice}</p>
       </div>
       <ul className={css.car_info_list}>
        <li className={css.car_info_item}>{city}</li>
        <li className={css.car_info_item}>{country}</li>
        <li className={css.car_info_item}>{rentalCompany}</li>
        {(rentalCompany==="Luxury Car Rentals"||rentalCompany==="Premium Auto Rentals" )&& <li>Premium</li>}
       </ul>
       <ul className={css.car_info_list}>
        <li className={`${css.car_info_item} ${css.text_type}`}>{type}</li>
        <li className={css.car_info_item}>{model}</li>
        <li className={css.car_info_item}>{id}</li>
        <li className={css.car_info_item}>{accessories[randomInteger]}</li>
       </ul>
       <button className={css.button_cart}type="button" onClick={() => openModal(car)}>Learn more</button>
    </li>
  )
}

export default CarItem
