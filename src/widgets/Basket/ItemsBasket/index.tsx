'use client'

import {FC} from "react";
import {styled} from "@/shared/globalStyles";
import {useBasket} from "@/stores/basket";
import {BasketItem} from "@/widgets/Basket/ItemsBasket/BasketItem";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {adaptiveValue} from "@/shared/globalStyleFunction";

let Index: FC = ({...props}) => {
    const articles = useBasket(set => set.articles)

    return (
        <section className="BasketItems" {...props}>

            <div className="BasketItems__container container">


                {Object.keys(articles).length ?
                    Object.keys(articles).map((item) => {

                        return <StyleRes key={articles[item]._id} style={{display: articles[item]._id ? 'block' : 'none'}}>
                                <BasketItem item={articles[item]}/>

                                <div className="BasketItems__LongLine"></div>
                            </StyleRes>})

                    : <NotFoundArticlesInBasketText>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: adaptiveValue(100, 70) }}/>
                        <p>Ваша корзина пуста</p>
                    </NotFoundArticlesInBasketText>}

            </div>

        </section>
    );
};

const NotFoundArticlesInBasketText = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '20px',
    color: '#b6b6b6',
    margin: '0 auto',
    gap: '10px',
    marginBottom: '4.6875rem'
})

const StyleRes = styled("div", {
    '&:only-child': {

        '> div:first-child': {
            borderRadius: '10px !important',
        }

    },

    '&:first-child': {

        '> div:first-child': {
            borderRadius: '10px 10px 0 0',
        }

    },

    '&:last-child': {
        '> div:first-child': {
            borderRadius: '0 0 10px 10px',
        },

        '.BasketItems__LongLine': {
            display: 'none !important',
        },
    },
})


Index = styled(Index, {
    '.BasketItems__container': {
        display: 'flex',
        flexDirection: 'column'
    },

    '.BasketItems__LongLine': {
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});

export default Index;