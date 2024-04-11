'use client'

import {FC} from "react";
import {BasketItemProps} from "@/widgets/Basket/ItemsBasket/models";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import {useBasket} from "@/stores/basket";


let BasketItem: FC<BasketItemProps> = ({item, ...props}) => {

    const addArticles = useBasket(state => state.addArticles)
    const minusArticles = useBasket(state => state.minusArticles)
    const deleteArticles = useBasket(state => state.deleteArticles)
    const articles = useBasket(state => state.articles)


    const handleClickAdd = () => {
        addArticles(item)
    }

    const handleClickMinus = () => {
        minusArticles(item._id)
    }

    const handleClickDelete = () => {
        deleteArticles(item._id)
    }

    return (
        <div className="BasketItem" {...props} >

            <div className="BasketItem__img">
                <img src={item.img} alt={item.img.toString()}/>
            </div>

            <div className="BasketItem__contentWrapper">

                <div className="BasketItem__descriptionWrapper">
                    <div className="BasketItem__Title">{item.title}</div>
                    <div className="BasketItem__Description">{item.description}</div>
                </div>

                <div className="BasketItem__buttonsWrapper">

                    <div className="BasketItem__ItemsPanel">
                        <button onClick={handleClickMinus} className="BasketItem__ItemButton">
                            <img src="/icons/minus.svg" alt="-"/>
                        </button>

                        <div className="BasketItem__amount">{item.count}</div>

                        <button onClick={handleClickAdd} className="BasketItem__ItemButton">
                            <img src="/icons/plus.svg" alt="+"/>
                        </button>
                    </div>

                    <div className="BasketItem__priceWrapper">
                        <span>{item.count ? item.count * item.price : item.price}</span> ₽
                    </div>

                    <button onClick={handleClickDelete} className="BasketItem__ItemButton BasketItem__close">
                        <img src="/icons/close.svg" alt="-"/>
                    </button>

                </div>

            </div>


        </div>
    )
}

BasketItem = styled(BasketItem, {
    display: 'flex',
    padding: '20px 50px 20px 20px',
    backgroundColor: 'rgba(73, 69, 68, 1)',

    '@mobile': {
        padding: '10px',
    },

    '.BasketItem__img': {
        marginRight: adaptiveValue(40, 13),

        'img': {
            width: '111px',
            height: '82px',

            '@mobile': {
                borderRadius: '10px',
            },
        },
    },

    '.BasketItem__descriptionWrapper': {
        maxWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minWidth: '200px',

        '@mobile': {
            minWidth: 'auto',
        },
    },

    '.BasketItem__contentWrapper': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

        '@mobile': {
            flexDirection: 'column',
            margin: 0,
        },
    },

    '.BasketItem__Title': {
        fontWeight: '500',
        fontSize: '18px', // 30px converted to rems

        color: '#FFFFFF',

        '@mobile': {
            fontSize: '20px', // 12px converted to rems
        },
    },

    '.BasketItem__Description': {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '0.75rem', // 12px converted to rems
        lineHeight: '0.9375rem', // 15px converted to rems
        maxWidth: '300px',

        color: '#A6A7AB',

        '@mobile': {
            display: 'none',
        },
    },

    '.BasketItem__ItemsPanel': {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingRight: '20px',
        paddingLeft: '20px',
        margin: '0 auto',

        '@mobile': {
            padding: 0,
            gap: '5px',
            margin: 0,
        },
    },

    '.BasketItem__ItemButton': {
        minWidth: '27px',
        minHeight: '27px',
        backgroundColor: '#79B282',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        margin: 'auto 0',

        '&:hover': {
            backgroundColor: '#395e40',
        },

        'img': {
            margin: '0 auto',
        },

        '@mobile': {
            minWidth: '18px',
            minHeight: '18px',

            'img': {
                maxWidth: '9px',
                maxHeight: '9px',
            },
        },
    },

    '.BasketItem__amount': {
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        minWidth: '40px',
        fontSize: adaptiveValue(20, 12), // 20px converted to rems

        color: '#FFFFFF',

        '@mobile': {
            minWidth: '10px'
        }
    },

    '.BasketItem__priceWrapper': {
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: adaptiveValue(20, 12), // 20px converted to rems

        color: '#FFFFFF',

        'span': {
            textAlign: 'right',
            minWidth: '100px',

            '@mobile': {
                minWidth: 0,
            },
        }

    },

    '.BasketItem__close': {
        display: 'flex',
        marginLeft: adaptiveValue(75, 5),
    },

    '.BasketItem__buttonsWrapper': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
})


export { BasketItem }









