
const initialState={
    results: [],
    favorites:[],
    isLoading:false,
    brandFilter:'',
    priceFilter:'',
    filter:[],
 }

export const catalogReducer=(state=initialState, action)=>{
    switch(action.type){
        case "catalog/setIsLoading":{
            return {...state, isLoading:action.payload}
        }
        case "catalog/setResults":{
            return {...state, results:action.payload}
        }
        case "favorites/setFavorites":{
            return {...state, favorites:action.payload}
        }
        case "catalog/setBrandFilter":{
            return {...state, brandFilter:action.payload}
        }
        case "catalog/setPriceFilter":{
            return {...state, priceFilter:action.payload}
        }
        default: return state;
    }
   }