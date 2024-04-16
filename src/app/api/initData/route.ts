import fs from "fs";
import {ArticlesInterface} from "@/db/models/types";
import {transliterate} from "transliteration";
import {ArticlesService} from "@/db/services/articles-service";
import {AddToOrderServices} from "@/db/services/addToOrder-service";


const initDataBase = async () => {
    const jsonData = fs.readFileSync('./src/app/api/initData/js.json', 'utf-8');
    let data = JSON.parse(jsonData);

    const jsonDataOrder = fs.readFileSync('./src/app/api/initData/addOrder.json', 'utf-8');
    let dataOrder = JSON.parse(jsonDataOrder);

    data = data.map((item: ArticlesInterface) => {
        let newItem = item
        newItem.url = "/product/" + transliterate(item.title).replaceAll(" ", "-").toLowerCase()
        return newItem
    })

    dataOrder = dataOrder.map((item: ArticlesInterface) => {
        let newItem = item
        newItem.url = "/product/" + transliterate(item.title).replaceAll(" ", "-").toLowerCase()
        return newItem
    })

    await ArticlesService.resetArticles()
    await ArticlesService.writeArticles(data)

    await AddToOrderServices.resetArticles()
    await AddToOrderServices.writeArticles(dataOrder)

}

export const GET = async () => {

    await initDataBase()

    return new Response("OK")

}






