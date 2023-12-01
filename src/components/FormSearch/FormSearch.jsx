import { arrayNumber, makes } from 'constans/constans';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import css from './FormSearch.module.css'

const FormSearch = () => {
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Додайте код для виконання пошуку тут, наприклад, виклик функції для відправлення запиту на сервер
    console.log('Searching...', { carBrand, price, fromMileage, toMileage });
  };

  return (
    <section className={css.container}>
            <form className={css.form}onSubmit={handleSearch}>
        <div className={css.select_container}>
        <label htmlFor="carBrand">Car Brand:</label>
      <select
        id="carBrand"
        name="carBrand"
        value={carBrand}
        onChange={(e) => setCarBrand(e.target.value)}
      >
        <option value="">Enter the text</option>
       {makes.map(car => 
     <option key={nanoid(8)} value={car}>{car}</option>) }
      </select>
        </div>

     <div className={css.select_container}>
     <label htmlFor="price">Price/ 1 hour:</label>
      <select
        id="price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">To $</option>
        {arrayNumber().map(nuber => 
     <option key={nanoid(4)} value={nuber}>{nuber}</option>) }
      </select>
     </div>

    <div className={css.select_container}> 
    <label htmlFor="Car mileage / km">Car mileage / km</label>
     
     <div>
     <input
        type="text"
        id="fromMileage"
        name="fromMileage"
        value={fromMileage}
        onChange={(e) => setFromMileage(e.target.value.replace(/\D/, ''))}
        placeholder="From"
      />
        <input
        type="number"
        id="toMileage"
        name="toMileage"
        value={toMileage}
        onChange={(e) => setToMileage(e.target.value)}
        placeholder="To"
      />
        </div> 
    
    </div>  
      <button type="submit">Search</button>
    </form>
    </section>

  );
};

export default FormSearch;
