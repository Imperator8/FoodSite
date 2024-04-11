'use client'

import {devtools, persist} from "zustand/middleware";
import {create} from "zustand";
import {BasketArticle} from "@/stores/models";


export interface Basket {
    articles: {[key: string] : BasketArticle },
    addArticles: (article: BasketArticle) => void,
    minusArticles: (id: string | number) => void,
    deleteArticles: (id: string | number) => void,
    calculateArticles: () => number,
}

export const useBasket = create<Basket>()(
    devtools(
        persist(
            (set) => ({
                articles: {},
                addArticles: (article) => set((state) => {

                    const updateArticles = state.articles

                    if (article._id in updateArticles) {
                        if (updateArticles[article._id].count !== 999)
                            updateArticles[article._id].count++
                    } else {
                        updateArticles[article._id] = article
                    }

                    return ({
                        articles: { ...updateArticles }
                    })

                }),
                minusArticles: (id) => set(state => {

                    const updateArticles = state.articles

                    if (!(id in updateArticles)) {
                        return ({
                            articles: { ...updateArticles }
                        })
                    }

                    if (id in updateArticles) {
                        updateArticles[id].count--
                    }

                    if (!updateArticles[id].count) {
                        delete updateArticles[id]
                    }

                    return ({
                        articles: { ...updateArticles }
                    })

                }),
                deleteArticles: (id) => set(state => {

                    const updateArticles = state.articles

                    if (id in updateArticles)
                        delete updateArticles[id]

                    return ({
                        articles: { ...updateArticles }
                    })

                }),
                calculateArticles: () => {

                    const articles = useBasket.getState().articles

                    let len = 0

                    for (const item in articles) {
                        len += articles[item].count
                    }

                    return len

                },
            }),
            {
                name: 'basket',
            },
        ),
    ),
)








