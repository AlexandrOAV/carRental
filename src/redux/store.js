import { combineReducers, createStore } from "redux";
import { catalogReducer } from "./catalogReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
 

 const rootReducer = combineReducers ({  
        results:catalogReducer,
  });

  const enhancer = devToolsEnhancer();
 export const store = createStore(rootReducer, enhancer);
