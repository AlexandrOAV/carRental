
const initialState={
    results: [],
    totalResult:[],
    favorites:[],
    isLoading:false,
    brandFilter:'',
    priceFilter:'',
       
 }

export const catalogReducer=(state=initialState, action)=>{
    switch(action.type){
        case "catalog/setIsLoading":{
            return {...state, isLoading:action.payload}
        }
        case "catalog/setResults":{
            return {...state, results:action.payload}
        }
        case "catalog/setTotalResult":{
            return {...state, totalResult:action.payload}
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