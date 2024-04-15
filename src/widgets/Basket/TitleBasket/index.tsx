'use client'

import SmallTextBack from "@/components/SmallTextBack";
import {FC} from "react";
import {styled} from "@/shared/globalStyles";
import {useBasket} from "@/stores/basket";
import {NoSsr} from "@mui/base";



const BasketItems = () => {

    useBasket((state) => state.articles)
    const articlesLen = useBasket((state) => state.calculateArticles)()

    const articlesNumber = Number(Array.from(articlesLen.toString()).slice(-1)[0])
    let articleText = ''

    if (articlesNumber == 1) {
        articleText = 'товар'
    } else if (articlesNumber == 2 || articlesNumber == 3 || articlesNumber == 4) {
        articleText = 'товара'
    } else {
        articleText = 'товаров'
    }

    return (
        <p>(в корзине {articlesLen} {articleText})</p>
    )

}

let Index: FC = (props) => {

    return (
        <section className="BasketTitle" {...props}>

            <div className="BasketTitle__container container">

                <SmallTextBack href={'/#cold'}>к выбору блюда</SmallTextBack>

                <div className="BasketTitle__Title">
                    <div className="BasketTitle__Line"></div>
                    <h1>КОРЗИНА</h1>
                    <NoSsr>
                        <BasketItems/>
                    </NoSsr>
                </div>

            </div>

        </section>
    );
};

Index = styled(Index, {
    marginTop: '2.1875rem', // 35 / 16 = 2.1875rem
    marginBottom: '4.6875rem', // 75 / 16 = 4.6875rem

    '.BasketTitle__container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem', // 20 / 16 = 1.25rem
    },

    '.BasketTitle__back': {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        gap: '0.3125rem', // 5 / 16 = 0.3125rem
        width: 'fit-content',
        fontSize: '1rem', // 16 / 16 = 1rem
    },

    '.BasketTitle__Title': {
        display: 'flex',
        gap: '1.25rem', // 20 / 16 = 1.25rem

        '& h1': {
            fontSize: '2rem', // 32 / 16 = 2rem
        },

        '& p': {
            fontSize: '0.9375rem', // 15 / 16 = 0.9375rem
            color: '#72A479',
            display: 'flex',
            alignItems: 'flex-end',
        },
    },

    '.BasketTitle__Line': {
        width: '0.25rem', // 4 / 16 = 0.25rem
        backgroundColor: '#618967',
    },

})





export default Index;







