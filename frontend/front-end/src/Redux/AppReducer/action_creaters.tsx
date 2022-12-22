import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { AppActions, IgetProductData } from "./action";
import { App_ActionType } from "./action_types";
import { Icart_wishlistData } from "./reducer";


interface IsearchParamsProps{
    limit ?:number,
    page ?:number,
    sort ?:string,
    category ?:string,
    gender ?:string,
    dispatch:Dispatch<AppActions>
}
// payload:IsearchParamsPropsr

//  GET ALL PRODUCT DATA

export const getAllProducts=(payload:IsearchParamsProps)=>{
    const {limit,page=1,sort,category,gender,dispatch}=payload;
        dispatch({type:App_ActionType.LOADING})
        return axios.get(`https://smiling-jade-fly.cyclic.app/allproducts?limit=${limit}&category=${category}&page=${page}&gender=${gender}`).then((res)=>dispatch({type:App_ActionType.GET_PRODUCT_SUCCESS, payload:res.data })).catch((err)=>dispatch({type:App_ActionType.FAILURE}))    
}

// GET SINGLE PRODUCT DATA
interface IsingleProduct{
    _id:any,
    dispatch:Dispatch<AppActions>
}
export const getSingleProduct=(load:IsingleProduct)=>{
    const {_id,dispatch}=load;
    
        dispatch({type:App_ActionType.LOADING})
        return axios.get(`https://smiling-jade-fly.cyclic.app/allproducts/singleProduct?_id=${_id}`
            ).then((res)=>dispatch({type:App_ActionType.GET_SINGLE_PRODUCT_SUCCESS, payload:res.data})).catch((err)=>dispatch({type:App_ActionType.FAILURE}))
}


// SEND PRODUCT IN TO CART

interface IpostCartData{
    PCdata:Icart_wishlistData,
    dispatch:Dispatch<AppActions>
}
export const postCartProduct=(payload:IpostCartData)=>{
    const {PCdata,dispatch}=payload;
   const token= localStorage.getItem("token");
    const headers = { 
        'Authorization': `Bearer ${token}`
    };
    dispatch({type:App_ActionType.LOADING})
        return axios.post("https://smiling-jade-fly.cyclic.app/addtocart/create",PCdata,{headers}
            ).then((res)=>dispatch({type:App_ActionType.POST_CART_SUCCESS})).catch((err)=>dispatch({type:App_ActionType.FAILURE}))
}
interface IgetCartdata{
    dispatch:Dispatch<AppActions>
}
export const getCartProduct=(payload:IgetCartdata)=>{
    const {dispatch}=payload;
   const token= localStorage.getItem("token");
    const headers = { 
        'Authorization': `Bearer ${token}`
    };
    dispatch({type:App_ActionType.LOADING})
        return axios.get("https://smiling-jade-fly.cyclic.app/addtocart",{headers}
            ).then((res)=>dispatch({type:App_ActionType.GET_CART_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:App_ActionType.FAILURE}))
}

