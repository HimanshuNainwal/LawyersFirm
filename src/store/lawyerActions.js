import axios from "axios"
import { lawyerAction } from "./lawyerSlice"
import { uiActions } from "./uiSlice"


export const getLawyerData = (data) => {
    return async (dispatch) => {

        try{

            dispatch(uiActions.toggleLoader(true))
            const response = await axios(`http://localhost:3000/laywers`)
            if(response.status === 200){
                dispatch(uiActions.toggleLoader(false))
               dispatch(lawyerAction.setUserData(response.data))

               
            }


        }catch(err){
            dispatch(uiActions.toggleLoader(false))
            // show error page or error model
        }

    }
}