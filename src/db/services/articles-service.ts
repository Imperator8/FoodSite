import {ArticlesModel} from "../models/articles";
import {ArticlesInterface} from "@/db/models/types";
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
        const res = await this.getArticles()

        const result: ArticlesInterface[] = []

        for (const item of res) {
            result.push(new ArticleDto(item))
        }

        return JSON.parse(JSON.stringify(result))
    })

    static getArticlesByIds = connectWrapper(async (ids: string[]) => {
        return JSON.parse(JSON.stringify(await ArticlesModel.find().where('_id').in(ids)))
    })

    static getArticlesByUrl = connectRedis(connectRedis(async (url: string, RedisClient?: RedisClient) => {

        const resRedis = await RedisClient.GET(url)

        if (resRedis) {
            return JSON.stringify(new ArticleDto(JSON.parse(resRedis)))
        }

        const res = JSON.stringify(new ArticleDto(await ArticlesModel.findOne({ url: url })))

        await RedisClient.SET(url, res, {
            EX: 24 * 3600
        })

        return res

    }))

    static getRandomArticles = connectRedis(async (count: number, type: string, removeId?: string) => {

        let res = await ArticlesModel.find({ _id: {$ne: removeId}, type: type }).where().limit(count)

        res = res.map(item => new ArticleDto(item))

        return JSON.stringify(res)

    })



}



