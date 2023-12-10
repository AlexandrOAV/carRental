import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogReducer";
 

 export const store = configureStore({
     reducer:{ results:catalogReducer},
    });


