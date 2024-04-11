import { Schema, model, models } from "mongoose"


export const ArticlesSchema = new Schema({
    img: String,
    title: String,
    heft: Number,
    description: String,
    price: Number,
    type: String,
    url: String,
    proteins: Number,
    fats: Number,
    carbohydrates: Number,
    kilocalories: Number,
}, {timestamps: true})

const ArticlesModel = models.articles || model('articles', ArticlesSchema)

export { ArticlesModel }
