import {ArticlesModel} from "../models/articles";
import {ArticlesInterface, ArticlesTypesDict} from "@/db/models/types";
import {connectWrapper} from "@/db/utils/connectWrapper";
import {ArticleDto} from "@/db/dtos/articleDto";
import {connectRedis} from "@/db/config/redis";
// @ts-ignore
import {RedisClient} from "redis";


export class ArticlesService {

    static getArticles = connectWrapper(async () => {
        return JSON.parse(JSON.stringify(await ArticlesModel.find()))
    })

    static writeArticles = connectWrapper(async (data: ArticlesInterface[] | ArticlesInterface) => {
        await ArticlesModel.insertMany(data)

        return {status: 'OK'}
    })

    static resetArticles = connectWrapper(async () => {
        await ArticlesModel.deleteMany({})
    })

    static getArticlesListTypes = connectWrapper(async () => {
        const res: ArticlesTypesDict[] = await this.getArticles()

        let resultDict: ArticlesTypesDict = {
            cold: [],
            hot: [],
            meat: [],
            fish: [],
            grill: [],
            signature: [],
            drinks: [],
        }

        for (const item of res) {
            // @ts-ignore
            resultDict[item.type].push(new ArticleDto(item))
        }

        return JSON.parse(JSON.stringify(resultDict))
    })

    static getArticlesByIds = connectWrapper(async (ids: string[]) => {
        return JSON.parse(JSON.stringify(await ArticlesModel.find().where('_id').in(ids)))
    })

    static getArticlesByUrl = connectRedis(connectWrapper(async (url: string, RedisClient?: RedisClient) => {

        const resRedis = await RedisClient.get(url)

        if (resRedis) {
            return JSON.stringify(new ArticleDto(JSON.parse(resRedis)))
        }

        const res = JSON.stringify(new ArticleDto(await ArticlesModel.findOne({ url: url })))

        await RedisClient.set(url, res)

        return res

    }))

    static getRandomArticles = connectWrapper(async (count: number, type: string, removeId?: string) => {

        let res = await ArticlesModel.find({ _id: {$ne: removeId}, type: type }).where().limit(count)

        res = res.map(item => new ArticleDto(item))

        return JSON.stringify(res)

    })



}



