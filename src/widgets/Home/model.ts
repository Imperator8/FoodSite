import {HTMLAttributes} from "react";
import {ArticlesInterface} from "@/db/models/types";


export interface ShowCaseCards extends ArticlesInterface{
    selectItems?: number,
}

export interface ShowCaseCard {
    item: ShowCaseCards
}

export interface ShowCase extends HTMLAttributes<HTMLDivElement>{
    list: ShowCaseCards[],
    title: string,
    sectionId?: string
}





