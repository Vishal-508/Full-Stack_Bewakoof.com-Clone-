// https://smiling-jade-fly.cyclic.app

import { App_ActionType } from "./action_types";

interface IgetProductData{
    other_images: IotherImages[],
    _id: string,
    id: number,
    all_offer_price: number,
    description ?: string,
    category: string,
    color:string[],
    design ?: string,
    display_image: string,
    flip_image ?: string,
    parent_category ?: string,
    product_sizes: IsubProduct_size[],
    stock_status: boolean,
    member_price: number,
    mrp: number,
    name: string,
    custom_name ?: string,
    offer_type ?: string,
    price: number,
    ptype ?: string,
    subclass ?:string,
    url : string,
    brand ?: string,
    model ?: string,
    material ?:string,
    status: number,
    color_name ?: string,
    tribe_text ?: string,
    tribe_image_url ?: string,
    designer ?: string,
    cat_designer ?: string,
    in_stock: number,
    gender: string,
    experiment_id ?: string,
    limited_edition: boolean,
    group_count ?: number,
    category_info ?: IcategoryInfo,
    child_category ?: IcategoryInfo,
    sp ?: string,
    offer: string,
    coin_statement ?: string,
    average_rating ?: number,
    tag ?: Itags[],
    tribe_header ?: string,
    upgraded_dimension ?: boolean,
    member_discount: string,
    product_discount: string,
    manufacturer_brand:string
}

interface Itags{
    type:string,
    label:string,
    bgColor:string,
    textColor:string
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


// GET ALLPRODUCTS
interface IgetProductSuccess{
type:App_ActionType.GET_PRODUCT_SUCCESS;
payload:IgetProductData;
} 
interface IgetProductFailure{
    type:App_ActionType.FAILURE;
}
interface IgetProductLoading{
    type:App_ActionType.LOADING;
}


export type AppActions= IgetProductLoading | IgetProductSuccess | IgetProductFailure