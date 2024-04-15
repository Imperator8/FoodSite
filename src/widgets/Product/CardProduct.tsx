'use client'

import {FC} from "react";
import CardButton from "@/widgets/Product/CardButton";
import {styled} from "@/shared/globalStyles";
import {ArticlesInterface} from "@/db/models/types";
import Link from "next/link";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import Image from "next/image"

export interface CardProductInterface {
    item: ArticlesInterface
}

let CardProduct: FC<CardProductInterface> = ({item, ...props}) => {

    return (
        <section className="CardProduct" {...props}>
            <div className="CardProduct__container container">

                <Link className="CardProduct__backButton" href={`/#${item.type}`}>
                    <div className="CardProduct__backArrow">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM2 5.25L1 5.25L1 6.75L2 6.75L2 5.25Z"/>
                        </svg>
                    </div>

                    <span>Вернуться назад</span>
                </Link>

                <div className="CardProduct__Wrapper">

                    <div className="CardProduct__Img">
                        <Image height={400} width={600} src={item.img} alt="Product"/>
                    </div>

                    <div className="CardProduct__AboutProduct">

                        <div className="CardProduct__AboutWrapper">


                            <div className="CardProduct__DescriptionWrapperUp">
                                <h2 className="CardProduct__Title">{item.title}</h2>

                                <p className="CardProduct__Description">
                                    {item.description}
                                </p>
                            </div>

                            <div className="CardProduct__DescriptionWrapperDown">
                                <p className="CardProduct__Title">Вес: {item.heft} г</p>

                                <div className="CardProduct__PriceWrapper">

                                    <CardButton item={item}/>

                                </div>
                            </div>


                        </div>

                        <div className="CardProduct__AboutDetails">
                            <div className="CardProduct__AboutDetailsContainer">

                                <div className="CardProduct__AboutDetailsItems">
                                    <p>Белки</p>
                                    <p>{item.proteins}</p>
                                </div>

                                <div className="CardProduct__AboutDetailsItems">
                                    <p>Жиры</p>
                                    <p>{item.fats}</p>
                                </div>

                                <div className="CardProduct__AboutDetailsItems">
                                    <p>Углеводы</p>
                                    <p>{item.carbohydrates}</p>
                                </div>

                                <div className="CardProduct__AboutDetailsItems">
                                    <p>Ккал</p>
                                    <p>{item.kilocalories}</p>
                                </div>

                                <div className="CardProduct__AboutDetailsItems">
                                    <p>Вес</p>
                                    <p>{item.heft}</p>
                                </div>


                            </div>
                        </div>


                    </div>


                </div>


            </div>
        </section>
    );
};


CardProduct = styled(CardProduct, {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '40px',
    paddingBottom: '50px',

    '.CardProduct__container': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px',
        position: 'relative',
    },

    '.CardProduct__backButton': {
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
        width: 'fit-content',
        fontWeight: '500',
        fontSize: '1rem', // rem(16)
        color: '#FFFFFF',

        '@mobile': {
            position: 'absolute',
            left: '25px',
            top: '7px',

            '> span': {
                display: 'none',
            },
        },
    },

    '.CardProduct__backArrow': {
        padding: '10px 12px',
        backgroundColor: '$greenLight',
        display: 'flex',
        borderRadius: '26px',

        '@mobile': {
            backgroundColor: '#FFFFFF',

            svg: {
                fill: '#6F9F76',
            },
        },
    },

    '.CardProduct__Wrapper': {
        display: 'flex',
        borderRadius: '10px',
        backgroundColor: 'rgba(73, 69, 68, 1)',

        '@mobile': {
            flexDirection: 'column',
        },
    },

    '.CardProduct__Img': {
        display: 'flex',

        img: {
            borderRadius: '10px 0 0 10px',
            maxWidth: '100%',
            maxHeight: '100%',
            height: 400,
            width: '100% !important',
            objectFit: 'cover',

            "@mobile": {
                height: "100%",
            }
        },
    },

    '.CardProduct__AboutProduct': {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: adaptiveValue(40, 15),
        minWidth: '50%',
    },

    '.CardProduct__AboutWrapper': {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '40px',
        maxWidth: '430px',
        height: '100%',
        justifyContent: 'space-between',
        marginRight: '20px',

        '@mobile': {
            maxWidth: 'fit-content',
            textAlign: 'center',
            margin: '0 auto'
        },
    },

    '.CardProduct__Price': {
        whiteSpace: 'nowrap',
    },

    '.CardProduct__DescriptionWrapperUp': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: 'fit-content',

        h2: {
            fontWeight: '600',
            fontSize: '1.5625rem', // rem(25)
            lineHeight: '30px',
            color: '#FFFFFF',
        },

        p: {
            fontWeight: '400',
            fontSize: '0.875rem', // rem(14)
            lineHeight: '16px',
            color: '#CFCFCF',
        },
    },

    '.CardProduct__DescriptionWrapperDown': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px',
        marginTop: '30px',
        fontWeight: '300',
        fontSize: '0.875rem', // rem(14)
        lineHeight: '16px',
        color: '#FFFFFF',
    },

    '.CardProduct__PriceWrapper': {
        display: 'flex',
        alignItems: 'center',
        columnGap: '25px',

        p: {
            fontWeight: '700',
            fontSize: '1.5625rem', // rem(25)
            color: '#FFFFFF',
        },

        '@mobile': {
            justifyContent: 'center',
        },
    },

    '.CardProduct__AboutDetails': {
        position: 'relative',

        '&:before': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            top: '48%',
            right: '0',
        },
    },

    '.CardProduct__AboutDetailsContainer': {
        display: 'flex',
        columnGap: adaptiveValue(55, 20),
        padding: '0 20px',
        marginLeft: '40px',
        marginTop: '30px',
        marginBottom: '30px',
        fontWeight: '300',
        fontSize: '0.75rem', // rem(12)
        lineHeight: '14px',
        color: '#FFFFFF',

        '@mobile': {
            justifyContent: 'center',
            marginLeft: '0',
        },
    },

    '.CardProduct__AboutDetailsItems': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        'p:first-child': {
            color: '#CFCFCF',
        },
    },
})



export { CardProduct }




