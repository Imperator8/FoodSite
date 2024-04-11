import Logo from "@/entities/Logo";
import {styled} from "@/shared/globalStyles";
import React from "react";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import Link from "next/link";


let Index: React.FC = (props) => {
    return (
        <footer className="footer" {...props}>
            <div className="footer__container container">

                <div className="footer__politicsWrapper">
                    <Logo/>

                    <div className="footer__oooWrapper">
                        <div className="footer__oooButton">© ООО СК «АПШЕРОН»</div>
                        <div className="footer__oooButton">Все права защищены. 2010-2020</div>
                    </div>

                    <a href="#" className="footer__politicsText">Пользовательское соглашение</a>
                    <a href="#" className="footer__politicsText">Карта сайта</a>
                    <a href="#" className="footer__politicsText">Политика конфиденциальности</a>


                </div>

                <div className="footer__aboutWrapper">
                    <a href="#" className="footer__aboutButton">О ресторане</a>
                    <Link href={'/delivery'} className='footer__aboutButton'>Условия доставки</Link>
                    <a href="#" className="footer__aboutButton">Возврат товара</a>
                    <Link href={'/actions'} className='footer__aboutButton'>Акции</Link>
                </div>

            </div>
        </footer>
    );
};


Index = styled(Index, {
    background: 'linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%)',
    padding: '1.875rem 0', // 30 / 16 = 1.875rem

    '.footer__container': {
        display: 'flex',
        gap: adaptiveValue(120, 30), // Custom function for adaptive gap
        '@tablet': {
            justifyContent: 'center',
        },
    },

    '.footer__politicsWrapper': {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.875rem', // 14 / 16 = 0.875rem

        'a:first-child': {
            '&:before': {
                display:'none'
            }
        },

        'a': {
            lineHeight: '1.25rem', // 20 / 16 = 1.25rem
            position: 'relative',
            width: 'fit-content',

            '&:before': {
                position: 'absolute',
                width: '100%',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
                left: 0,
                bottom: 0,
                content: '""',
            },
        },

        'a:hover': {
            color: '#9d9b9b',
        },
    },

    '.footer__oooWrapper': {
        fontSize: '0.75rem', // 12 / 16 = 0.75rem
        marginTop: '1.25rem', // 20 / 16 = 1.25rem
        marginBottom: '0.625rem', // 10 / 16 = 0.625rem
        color: '$greyText', // Assuming $greyText is defined elsewhere
    },

    '.footer__aboutWrapper': {
        display: 'flex',
        gap: '2.5rem', // 40 / 16 = 2.5rem
        alignItems: 'center',

        '@tablet': {
            display: 'none',
        },

        'a:hover': {
            color: '#9d9b9b',
        },
    },
})


export default Index;