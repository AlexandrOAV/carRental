import  { createSlice }  from "@reduxjs/toolkit";


const initialState={
    results: [],
    totalResult:[],
    favorites:[],
    isLoading:false,
    brandFilter:'',
    priceFilter:'',
       
 }

 const carDataSlice = createSlice({
    name: "car",
    initialState,
    // Об'єкт редюсерів
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setResults(state, action) {
            return {...state, results:action.payload}
        },
        setTotalResult(state, action) {
            return {...state, totalResult:action.payload}
        },
        setFavorites(state, action) {
            return {...state, favorites:action.payload}
        },
        setBrandFilter(state, action) {
            return {...state, brandFilter:action.payload}},
        setPriceFilter(state, action) {
            return {...state, priceFilter:action.payload}
        },
    },
  });

//   export const setIsLoading = (payload)=>{
//     return {
//         type:"catalog/setIsLoading",
//         payload
//     }
//   }

//   export const setBrandFilter = (payload)=>{
//     return {
//         type:"catalog/setBrandFilter",
//         payload
//     }
//   }

//   export const setPriceFilter = (payload)=>{
//     return {
//         type:"catalog/setPriceFilter",
//         payload
//     }
//   }

//   export const setTotalResult =(payload) =>{
//     return {
//         type:"catalog/setTotalResult",
//         payload
//     }
//   }

//   export const setResults =(payload) =>{
//     return {
//         type:"catalog/setResults",
//         payload
//     }
//   }

//   export const setFavorites =(payload) =>{
//     return {
//         type:"favorites/setFavorites",
//         payload
//     }
//   }


 export  const {setIsLoading, 
    setResults, 
    setTotalResult, 
    setFavorites, 
    setBrandFilter, 
    setPriceFilter
} = carDataSlice.actions;

export const selectFavorites = (state)=>state.results.favorites;
export const selectResults = (state)=>state.results.results;
export const selectTotalResults = (state)=>state.results.totalResult;
export const selectIsLoading = (state)=>state.results.isLoading;
export const selectBrandFilter = (state)=>state.results.brandFilter;
export const selectPriceFilter = (state)=>state.results.priceFilter;

 export const catalogReducer = carDataSlice.reducer;

