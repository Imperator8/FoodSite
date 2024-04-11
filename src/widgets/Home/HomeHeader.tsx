import {FC} from 'react';
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";

let HomeHeader: FC = ({ ...props }) => {
    return (
        <div {...props}>
            <div className="HeadHomeBackground"></div>

            <div className="HeadHomeContainer container">

                <div className="WrapperText">
                    <div className="BackCard">
                        Доставка ВКУСНЕЙШИХ<br/>
                        БЛЮд за 60 минут
                    </div>

                    <div className="Card">
                        Доставка ВКУСНЕЙШИХ<br/>
                        БЛЮд за 60 минут
                    </div>

                    <button className="HeadHomeButton">
                        Еще не пробовал?
                    </button>
                </div>

            </div>
        </div>
    );
};

HomeHeader = styled(HomeHeader, {
    height: '500px',
    maxHeight: '100%',
    position: 'relative',
    backgroundImage: 'url("/home/menu.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',

    '.HeadHomeBackground': {
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, #0c0c0c 0%, rgba(68, 64, 63, 0) 100%)',
    },

    '.HeadHomeContainer': {
        position: 'relative',
        display: 'flex',
        height: '100%',
    },

    '.WrapperText': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '30%',
        zIndex: 0,
        marginLeft: adaptiveValue(50, 0),
    },

    '.HeadHomeButton': {
        width: 'fit-content',
        padding: '8px 17px',
        height: 'fit-content',
        position: 'absolute',
        left: '15%',
        top: '27%',
        background: 'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)',
        transform: 'rotate(-8.37deg)',
        clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
        boxShadow: '20px 20px 20px 20px rgb(12, 17, 11)',
        fontWeight: 800,
        fontSize: adaptiveValue(25, 18),
        lineHeight: '109.2%',
        textAlign: 'center',
        color: '#FFFFFF',
        zIndex: 5,
        border: '3px solid #47654b',

        '&:hover': {
            background: 'linear-gradient(114.93deg, #47654b 5.11%, #628d67 94%)',
        },

        '@tablet': {
            top: '30%',
        },

        '@mobile': {
            top: '30%',
            left: '20%',
        },

        '@media screen and (max-width: 550px)': {
            top: '38%',
        },
    },

    '.BackCard, .Card': {
        position: 'absolute',
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: adaptiveValue(55, 40),
        lineHeight: '109.2%',
        textAlign: 'center',
        width: 'fit-content',
        transform: 'rotate(-8.37deg)',
    },

    '.BackCard': {
        '-webkit-text-stroke': '1px rgba(255, 255, 255, 0.5)',
        color: 'rgba(0, 0, 0, 0)',
        top: '5px',
        left: '-3px',
    },

    '.Card': {
        marginRight: '-3px',
        color: '$whiteText',
    },

});


export { HomeHeader }