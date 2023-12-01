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
    "Land"
  ];


export const imgExists = (url) => {
  const image = new Image();
  image.src = url;
  return image.complete || (image.width + image.height) > 0;
};
  
export const BASE_URL = "https://64ef982c219b3e2873c4ae04.mockapi.io/"

export const DEFOLT_IMAGE ='https://img.freepik.com/premium-vector/car-vector-bmw_73313-10.jpg?w=740'