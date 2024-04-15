import {DatesForm} from "@/stores/models";


export interface ArticlesInterface {
    _id: string,
    img: string,
    title: string,
    heft: number,
    description: string,
    price: number,
    type: string,
    url: string,
    proteins: number,
    fats: number,
    carbohydrates: number,
    kilocalories: number
}

export interface ArticlesTypesDict {
    cold?: ArticlesInterface[],
    hot?: ArticlesInterface[],
    meat?: ArticlesInterface[],
    fish?: ArticlesInterface[],
    grill?: ArticlesInterface[],
    signature?: ArticlesInterface[],
    drinks?: ArticlesInterface[],
}

export interface OrderStoreTypes {
    data: DatesForm,
    articles: ArticlesInterface[]
}








