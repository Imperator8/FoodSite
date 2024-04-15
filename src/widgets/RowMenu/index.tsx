import React, {FC} from "react";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import Drug from "@/shared/Drug";
import HeaderBasket from "@/widgets/Header/HeaderBasket";
import Link from "next/link";


interface Index {
    type?: "scroll"
}

let Index: FC<Index> = ({ type, ...props}) => {

    return (
        <div {...props}>

            <div className="RowMenu__container container">

                <Drug className='nav'>
                    <Link href="/#cold" className="nav__item active">
                        Холодные закуски
                    </Link>

                    <Link href="/#hot" className="nav__item">
                        Горячие закуски
                    </Link>

                    <Link href="/#meat" className="nav__item">
                        Мясные блюда
                    </Link>

                    <Link href="/#fish" className="nav__item">
                        Рыбные блюда
                    </Link>

                    <Link href="/#grill" className="nav__item">
                        Гриль меню
                    </Link>

                    <Link href="/#signature" className="nav__item">
                        Фирменные блюда
                    </Link>

                    <Link href="/#drinks" className="nav__item">
                        Напитки
                    </Link>
                </Drug>

                {type === "scroll" ? (
                    <HeaderBasket className={'scroll__basket__button'}/>
                ): null}

            </div>


        </div>
    );
};


Index = styled(Index, {
    position: 'relative',
    fontWeight: '100',
    zIndex: '10',
    maxHeight: 'fit-content',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',

    '& .RowMenu__container': {
        display: 'flex',
        alignItems: 'center',
        gap: '70px',
    },

    '& .nav': {
        display: 'flex',
        gap: '60px',
        overflowX: 'scroll',
        height: adaptiveValue(80, 55),
        alignItems: 'center',

        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },

    '& .active': {
        color: '#FFFFFF !important',

        '&::before': {
            position: 'absolute',
            content: '""',
            left: '0',
            bottom: '100px',
            height: '5px',
            width: '100%',
            backgroundColor: '#618967',
            display: 'block !important',
        },
    },

    '& .nav__item': {
        minWidth: 'fit-content',
        textDecoration: 'none',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: adaptiveValue(18, 14),
        lineHeight: '21px',
        position: 'relative',
        color: '#a1a1a1',
        transition: 'color .3s',

        '&::before': {
            position: 'absolute',
            content: '""',
            left: '0',
            bottom: '0',
            height: '2px',
            width: '100%',
            backgroundColor: '#618967',
            display: 'none',
            zIndex: 5,
        },

        '&:hover': {
            color: '#FFFFFF',

            '&::before': {
                display: 'block',
            },
        },
    },
})

export default Index;

