'use client'

import React, {FC} from 'react';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useBasket} from "@/stores/basket";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {ShowCaseCard} from "@/widgets/Home/model";
import {styled} from "@/shared/globalStyles";

let ShowCaseCardButton: FC<ShowCaseCard> = ({item, ...props}) => {

    const addArticles = useBasket(state => state.addArticles)
    const articles = useBasket(state => state.articles)
    const minusArticles = useBasket(state => state.minusArticles)

    const handleClickAdd = () => {
        addArticles({
            ...item,
            count: 1
        })
    }

    const handleClickMinus = () => {
        minusArticles(item._id)
    }

    if (item._id in articles) {

        return (
            <div className="ShowCaseCard__wrapperPrice" {...props}>
                <button onClick={handleClickMinus} className="ShowCaseCard__Button">
                    <RemoveIcon/>
                </button>
                <span className="ShowCaseCard__Price">{(articles[item._id].count * item.price).toFixed(0)} ₽</span>
                <button onClick={handleClickAdd} className="ShowCaseCard__Button">
                    <AddIcon/>
                </button>
            </div>)
    } else {
        return (
            <div className="ShowCaseCard__wrapperPrice" {...props}>
                <span className="ShowCaseCard__Price">{item.price} ₽</span>
                <button onClick={handleClickAdd} className="ShowCaseCard__Button">
                    <span>В корзину</span>
                    <ShoppingCartOutlinedIcon className='basket__icon' fontSize='small'/>
                </button>
            </div>)
    }

};

ShowCaseCardButton = styled(ShowCaseCardButton, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.ShowCaseCard__Price': {
        fontWeight: '600',
        fontSize: '1.25rem',
        color: '$whiteText',
    },

    '.ShowCaseCard__Button': {
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '0.8125rem 1.25rem 0.8125rem 1.25rem',
        background: 'linear-gradient(to bottom right, rgba(97, 137, 103, 1), rgba(114, 164, 121, 1))',
        borderRadius: '1rem',
        fontWeight: '600',
        fontSize: '0.875rem',
        color: '$whiteText',

        '&:hover': {
            boxShadow: '0 0.3125rem 1.25rem rgb(68, 114, 76)',
        },
    },
})

export default ShowCaseCardButton;








