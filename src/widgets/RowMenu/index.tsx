

import {FC} from "react";
import Drug from "@/shared/Drug";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import HeaderBasket from "@/widgets/Header/HeaderBasket";


interface Index {
    type?: "scroll"
}

let Index: FC<Index> = ({ type, ...props}) => {


    return (
        <div {...props}>

            <div className="RowMenu__container container">

                <Drug className='nav'>
                    <a href="#" className="nav__item active">
                        Холодные закуски
                    </a>

                    <a href="#" className="nav__item">
                        Горячие закуски
                    </a>

                    <a href="#" className="nav__item">
                        Мясные блюда
                    </a>

                    <a href="#" className="nav__item">
                        Рыбные блюда
                    </a>

                    <a href="#" className="nav__item">
                        Гриль меню
                    </a>

                    <a href="#" className="nav__item">
                        Фирменные блюда
                    </a>

                    <a href="#" className="nav__item">
                        Напитки
                    </a>
                </Drug>

                {type === "scroll" ? (
                    <HeaderBasket basketItems={4} className={'scroll__basket__button'}/>
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

    '.RowMenu__container': {
        display: 'flex',
        alignItems: 'center',
        gap: '70px',
    },

    '.nav': {
        display: 'flex',
        gap: '60px',
        overflowX: 'scroll',
        height: adaptiveValue(80, 55),
        alignItems: 'center',

        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },

    '.active': {
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

    '.nav__item': {
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

