import {HTMLAttributes} from "react";


export interface ShowCaseCards {
    id: number,
    img: string,
    title: string,
    heft: number,
    description: string,
    price: number,
    selectItems?: number,
    url: string
}

export interface ShowCaseCard {
    item: ShowCaseCards
}

export interface ShowCase extends HTMLAttributes<HTMLDivElement>{
    list: ShowCaseCards[],
    title: string
}





