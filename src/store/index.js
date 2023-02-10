import { configureStore } from "@reduxjs/toolkit";
import lawyerSlice from "./lawyerSlice";
import uiSlice from "./uiSlice";


const store = configureStore({
    reducer:{lawyer:lawyerSlice.reducer,ui:uiSlice.reducer}
})

export default store