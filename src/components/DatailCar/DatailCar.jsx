import React from 'react'
import css from './DatailCar.module.css'
import { addCity, arrayCheck, formatNumber } from 'constans/constans';

const DatailCar = ({car, url}) => {
    const {
        id, 
        type, 
        make, 
        model, 
        year, 
        address, 
        rentalConditions, 
        fuelConsumption,
        engineSize,
        accessories,
        description,
        functionalities,
        mileage,
        rentalPrice,
    } = car;

    const conditionsArray = rentalConditions.split('\n');
   
    const ageYear = conditionsArray[0].slice(conditionsArray[0].lastIndexOf(' ') + 1);

    const mileageNumber = formatNumber(mileage);

    const showPosterAccessories = arrayCheck(accessories);
    const showPosterFunctionalities = arrayCheck(functionalities);

  return (
    <div className={css.modal_container}>
      <img className={css.image}src={url} alt={car.make} width={460}/>

      <h2 className={css.item_head}>{make} <span className={css.item_model}>{model}</span>, {year}</h2>
   
    <ul className={css.car_info_list}>
        <li className={css.car_info_item}>{addCity(address).city}</li>
        <li className={css.car_info_item}>{addCity(address).country}</li>
        <li className={css.car_info_item}>Id:{id}</li>
        <li className={css.car_info_item}>Year:{year}</li>
        <li className={css.car_info_item}>Type:{type}</li>
    </ul>
    <ul className={css.car_info_list}>
        <li className={css.car_info_item}>Fuel Consumption:{fuelConsumption}</li>
        <li className={css.car_info_item}>Engine Size:{engineSize}</li>
    </ul>

    <p className={css.description}>{description}</p>

    <h3 className={css.text_title}>Accessories and functionalities:</h3>
<ul className={css.car_info_list}>
    {showPosterFunctionalities&&functionalities.map(element=>{
        return <li className={css.car_info_item}>{element}</li>
        })}
</ul>
<ul className={css.car_info_list}>
    {showPosterAccessories&&accessories.map(element=>{
        return <li className={css.car_info_item}>{element}</li>
        })}
</ul>

<h3 className={css.text_title}>Rental Conditions: </h3>
    <ul className={css.car_text_list}>
        <li className={css.car_text_item}>Minimum age :<span>{ageYear}</span> </li>
        <li className={css.car_text_item}>{conditionsArray[1]}</li>
    </ul>
    <ul className={css.car_text_list}>
        <li className={css.car_text_item}>{conditionsArray[2]}</li>
        <li className={css.car_text_item}>Mileage:<span>{mileageNumber}</span></li>
        <li className={css.car_text_item}>Price:<span>{rentalPrice}</span></li>
    </ul>

    <a className={css.link_modal} href="tel:+380730000000">Rental car</a>
    </div>
  )
}

export default DatailCar
