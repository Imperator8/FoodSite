import connectionDB from "../config/database";
import {ArticlesModel} from "../models/articles";


export const getArticles = async () => {
    try {
        await connectionDB()

        const res = JSON.parse(JSON.stringify(await ArticlesModel.findOne()))

        return { res }
    } catch (err) {
        // @ts-ignore
        return { err: err.message }
    }
}


export const writeArticles = async () => {
    try {
        await connectionDB()

    } catch (err) {
        // @ts-ignore
        return { err: err.message }
    }
}






