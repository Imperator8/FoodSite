'use client'

import React, {FC} from 'react';
import {styled} from "@/shared/globalStyles";
import {useBasket} from "@/stores/basket";
import {CardProductInterface} from "@/widgets/Product/CardProduct";
import ShowCaseCardButton from "@/widgets/Home/ShowCaseCardButton";

let CardButton: FC<CardProductInterface> = ({ item, ...props}) => {

    const addArticles = useBasket(state => state.addArticles)
    const articles = useBasket(state => state.articles)

    const handleClickAdd = () => {
        addArticles({
            ...item,
            count: 1
        })
    }

    if (item._id in articles) {
        // @ts-ignore
        return <ShowCaseCardButton item={item} css={{
            width: "100%",
            maxWidth: '300px',

            "@mobile": {
                maxWidth: '100%',
                padding: '0 10px'
            }

        }}/>
    }

    return (
        <>
            <button className="CardButton" {...props} onClick={handleClickAdd}>
                <span>Корзина</span>

                <div className="CardButton__arrow"></div>

                <div className="svg">
                    <img src="/product/shop.svg" alt="shop"/>
                </div>
            </button>

            <p className="CardProduct__Price">
                {item.price} ₽
            </p>

        </>

    );
};

CardButton = styled(CardButton, {
    backgroundColor: '$greenLight',
    height: '50px',
    width: '145px',
    fontSize: '0.875rem', // rem(14)
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: '10px',

    '&:hover': {
        boxShadow: '0 0.3125rem 1.25rem rgb(68, 114, 76)',
    },

    '> .svg img': {
        borderRadius: '0',
    },

    '.CardButton__arrow': {
        width: '1px',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export default CardButton;