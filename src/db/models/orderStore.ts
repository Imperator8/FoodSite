import {model, models, Schema} from "mongoose"

const OrderStoreSchema = new Schema({
    data: Schema.Types.Mixed,
    articles: Schema.Types.Mixed,
}, {timestamps: true})

const OrderStoreModel = models.orderStore || model('orderStore', OrderStoreSchema)

export { OrderStoreModel }