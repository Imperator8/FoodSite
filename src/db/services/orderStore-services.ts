import {connectWrapper} from "@/db/utils/connectWrapper";
import {OrderStoreModel} from "@/db/models/orderStore";
import {OrderStoreTypes} from "@/db/models/types";


export class OrderStoreServices {


    static getArticles = connectWrapper(async () => {
        return JSON.parse(JSON.stringify(await OrderStoreModel.find()))
    })

    static writeArticles = connectWrapper(async (data: OrderStoreTypes) => {
        await OrderStoreModel.insertMany(data)

        return {status: 'OK'}
    })

}









