export const BASE_URL = "https://64ef982c219b3e2873c4ae04.mockapi.io/"

export const DEFOLT_IMAGE ='https://i.pinimg.com/564x/0c/6b/91/0c6b91d4b3f3f607a8a30b49e567fd90.jpg'

export const LIMIT_CAR_PAGE = 12;

export const makes = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
    "Mavik",
    "Ford",
    "Sputnik M",
  ];

export const arrayNumber =()=>{
const startNumber = 10;
const endNumber = 1500;
const step = 10;
const numberArray = [];
for (let i = startNumber; i <= endNumber; i += step) {
  numberArray.push(i);
}
return numberArray;
}

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const imgExists = (url) => {
  const image = new Image();
  image.src = url;
  return image.complete || (image.width + image.height) > 0;
};
  
export const  addCity= address =>{
  const addresArray = address.split(',');
  const city = addresArray[1];
  const country = addresArray[2];
  return {city, country};
}

export const arrayCheck =arr =>{
  const showPoster = Array.isArray(arr) && arr.length > 0;
  return showPoster;
}

export const numberFromText =(textNumber)=>{
  const number = textNumber.replace(/\D/g, '');
  return number;
}