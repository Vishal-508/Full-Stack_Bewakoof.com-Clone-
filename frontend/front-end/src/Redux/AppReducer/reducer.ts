import React from 'react'
import { AppActions } from './action';
import { App_ActionType } from './action_types';

interface IstateProps{
    isLoading:boolean;
    isError:boolean;
    AllProductData:IproductData[];
    cartData:Icart_wishlistData[];
    wishlistData:Icart_wishlistData[];
    addressData:IaddressData[];
}

const initialState={
    isLoading:false,
    isError:false,
    AllProductData:[],
    cartData:[],
    wishlistData:[],
    addressData:[]
}


const reducer = (state:IstateProps=initialState,action:AppActions) => {
  switch(action.type){


    case App_ActionType.LOADING:
      return {
        ...state, isLoading:true, isError:false 
      }
      case App_ActionType.FAILURE:
      return {
        ...state, isLoading:false, isError:true 
      }
    case App_ActionType.GET_PRODUCT_SUCCESS:
        return {
            ...state, AllProductData:action.payload
        }

    default:
        return state
  }
}

export {reducer}





// Address start
interface IaddressData{
    pin_code:number,
    city:string,
    state:string,
    flat_street_name:string,
    area_locality:string,
    landmark:string,
    address_as:string,
    name:string,
    number:number,
    userId:string
}

// Wishlist and Cart start
interface Icart_wishlistData{

    id:number,
    all_offer_price:number,
    category:string,
    display_image:string,
    stock_status:string,
    member_price:number,
    mrp:number,
    name:string,
    offer_type:string,
    product_sizes:string,
    price:number,
    gender:string,
    quantity:number,
    offer:string,
    member_discount:string,
    product_discount:string,
    manufacturer_brand:string,
    userId:string
}


// allProductData start
 export interface IproductData{
    other_images:IotherImages[],
    id:number,
    all_offer_price:number,
    description ?: string,
    category: string,
    color: string[],
    display_image: string,
    flip_image ?: string,
    product_sizes: IsubProduct_size[],
    stock_status: boolean,
    member_price: number,
    mrp: number,
    name: string,
    offer_type ?: string,
    price: number,
    url: string,
    brand ?: string,
    status: boolean,
    in_stock: boolean,
    gender: string,
    limited_edition: boolean,
    category_info ?: IcategoryInfo,
    offer: string,
    average_rating ?: number,
    member_discount: string,
    product_discount: string,
    manufacturer_brand: string,
    userId:string
}

interface IotherImages{
    id:number,
    url:string
}

interface IsubProduct_size{
    id:number;
    name:string;
    stock_status:boolean;
}

interface IcategoryInfo{
    gender:string,
    subclass?:string,
    id:number,
    name:string,
    url?:string
}

// allProductData ends