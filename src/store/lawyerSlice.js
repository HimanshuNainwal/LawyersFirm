import { createSlice } from "@reduxjs/toolkit";

 const lawyerSlice = createSlice({
    name:"lawyer",
    initialState:{lawyers:"",appionmentId:''},
    reducers:{
        setUserData(state,action){
         
            state.lawyers =  action.payload
        },

        setAppoinmentId(state,action){
            state.appionmentId = action.payload
        }       

        // setAppoinment(state,action){
        //     state.appoinments = action.payload
        // },
        
    }
 })


 export const lawyerAction = lawyerSlice.actions


 export default lawyerSlice