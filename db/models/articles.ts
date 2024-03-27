import { Schema, model, models } from "mongoose"


const articlesSchema = new Schema({
    id: Number,
    img: String,
    title: String,
    heft: Number,
    description: String,
    price: Number,
}, {timestamps: true})

const ArticlesModel = models.articles || model('articles', articlesSchema)

export { ArticlesModel }
