import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { AppActions } from "./action";
import { App_ActionType } from "./action_types";


interface IsearchParamsProps{
    limit ?:number,
    page ?:number,
    sort ?:string,
    category ?:string,
    gender ?:string,
    dispatch:Dispatch<AppActions>
}
// payload:IsearchParamsPropsr
export const getAllProducts=(payload:IsearchParamsProps)=>{
    const {limit=40,page=1,sort,category,gender,dispatch}=payload;
        dispatch({type:App_ActionType.LOADING})
        return axios.get(`https://smiling-jade-fly.cyclic.app/allproducts?limit=${limit}&category=${category}&page=${page}&gender=${gender}`).then((res)=>dispatch({type:App_ActionType.GET_PRODUCT_SUCCESS, payload:res.data })).catch((err)=>dispatch({type:App_ActionType.FAILURE}))
        
    
}
// dispatch({type:App_ActionType.FAILURE})
// (dispatch:Dispatch<AppActions>)=>
// `https://smiling-jade-fly.cyclic.app/allproducts?category=${category}&limit=${limit}&page=${page}&sort=${sort}&gender=${gender}`
// dispatch({type:App_ActionType.GET_PRODUCT_SUCCESS, payload:res.data }