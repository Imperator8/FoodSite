'use client'

import {FC} from "react";

import * as S from "@/widgets/Basket/AddToOrder/style";
import {useBasket} from "@/stores/basket";
import { MouseEvent } from 'react';
import {ArticlesInterface} from "@/db/models/types";


interface AddToOrderItemInterface {
    article: ArticlesInterface
}


export const AddToOrderItem: FC<AddToOrderItemInterface> = ({ article }) => {

    const addArticles = useBasket(state => state.addArticles)

    const handleClickAdd = (event: MouseEvent<HTMLLabelElement>) => {
        event.preventDefault()
        const articleToAdd = {
            ...article,
            count: 1
        }

        // @ts-ignore
        addArticles(articleToAdd)
    }

    return (
        <S.ItemWrapper>
            <S.ItemImg>
                <img src={article.img} alt="item"/>
            </S.ItemImg>

            <S.SubTitle>{article.title}</S.SubTitle>

            <S.AddButtonWrapper>
                <label onClick={handleClickAdd}>
                    Добавить <button><img src="/icons/plus.svg" alt=""/></button>
                </label>
            </S.AddButtonWrapper>

            <S.Price>
                {article.price} ₽
            </S.Price>


        </S.ItemWrapper>
    )
}