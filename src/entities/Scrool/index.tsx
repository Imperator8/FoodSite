'use client'

import React, {useEffect, useRef} from "react";
import Logo from "@/entities/Logo";
import HeaderBasket from "@/widgets/Header/HeaderBasket";
import RowMenu from "@/widgets/RowMenu";
import HeaderMobileBurger from "@/widgets/Header/HeaderMobileBurger";
import {styled} from "@/shared/globalStyles";
import * as S from "@/widgets/Header/styles";


let Index: React.FC = (props) => {

    const ref = useRef<HTMLDivElement>(null)

    const scrollReaction = () => {
        const pxY: number = window.scrollY;

        if (ref.current) {
            if (pxY >= 700) {
                ref.current.style.position = 'fixed'
                ref.current.style.display = 'block'
                ref.current.style.zIndex = "100"
                ref.current.style.backgroundColor = '#403C3B'
                ref.current.style.width = '100%'
                ref.current.style.borderBottom = '1px solid rgba(255, 255, 255, .1)'
            } else {
                ref.current.style.display = 'none'
            }
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollReaction)
    }, []);

    return (
        <div ref={ref} className="Scroll" {...props}>

            <header className="header scroll__header" style={{ marginBottom: 10, marginTop: 10 }}>
                <div className="container">

                    <S.MobileWrapper>

                        <HeaderMobileBurger/>

                        <Logo/>

                        <HeaderBasket basketItems={4}/>

                    </S.MobileWrapper>

                </div>
            </header>

            <RowMenu type={"scroll"}/>

        </div>
    );
};


Index = styled(Index, {
    display: 'none',

    '.scroll__hidden': {
        display: 'none !important',
    },

    '.scroll__header': {
        display: 'none',

        '@mobile': {
            display: 'block',
        },
    },

    '.scroll__mobile__hidden': {
        '@mobile': {
            display: 'none',
        },
    },

    '.scroll__basket__button': {

        '@mobile': {
            display: 'none'
        }

    }

})



export default Index;





