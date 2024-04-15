import {ArticlesInterface} from "@/db/models/types";


export interface BasketArticle extends ArticlesInterface{
    count: number
}


export interface DatesForm {
    name: string,
    phone: string,

    deliveryType: string,
    street: string,
    numberBuild: string,
    numberApartment: string,
    entrance: string,
    floor: number,
    comment: string,
    restaurant: string,

    payTypes: string,

    howDelivery: string,
    whatDelivery: string
    numberPerson: number ,
    call: string,

    agree: boolean,

    errors: string[],
    sendData: boolean
}



