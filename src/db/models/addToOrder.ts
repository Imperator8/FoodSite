import {model, models, Schema} from "mongoose"
import {ArticlesSchema} from "@/db/models/articles";

const AddToOrderSchema = new Schema({

})

const AddToOrderModel = models.addToOrder || model('addToOrder', ArticlesSchema)

export { AddToOrderModel }