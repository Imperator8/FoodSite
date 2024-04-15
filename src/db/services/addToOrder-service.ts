import {connectWrapper} from "@/db/utils/connectWrapper";
import {AddToOrderModel} from "@/db/models/addToOrder";
import {ArticleDto} from "@/db/dtos/articleDto";
import {ArticlesInterface} from "@/db/models/types";
import {connectRedis} from "@/db/config/redis";
// @ts-ignore
import {RedisClient} from 'redis'


export class AddToOrderServices {

    static getArticles = connectRedis(connectWrapper(async (RedisClient?: RedisClient) => {

        const resRedis = await RedisClient.get("addToOrderArticles")

        if (resRedis) {
            return JSON.parse(resRedis)
        }

        let res: any[] = JSON.parse(JSON.stringify(await AddToOrderModel.find()))

        res = res.map(item => new ArticleDto(item))

        RedisClient.set("addToOrderArticles", JSON.stringify(res))

        return JSON.parse(JSON.stringify(res))
    }))

    static writeArticles = connectWrapper(async (data: ArticlesInterface[] | ArticlesInterface) => {
        await AddToOrderModel.insertMany(data)

        return {status: 'OK'}
    })

    static resetArticles = connectWrapper(async () => {
        await AddToOrderModel.deleteMany({})
    })

}



