


export class ArticleDto {
    _id: string
    img: string
    heft: number
    title: string
    description: string
    price: number
    type: string
    url: string
    proteins: number
    fats: number
    carbohydrates: number
    kilocalories: number



    constructor(model: any) {
        this._id = model._id
        this.img = model.img
        this.heft = model.heft
        this.title = model.title
        this.description = model.description
        this.price = model.price
        this.type = model.type
        this.url = model.url
        this.proteins = model.proteins
        this.fats = model.fats
        this.carbohydrates = model.carbohydrates
        this.kilocalories = model.kilocalories
    }

}






