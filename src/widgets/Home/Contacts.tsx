import { adaptiveValue } from "@/shared/globalStyleFunction";
import {styled} from "@/shared/globalStyles";

let Contacts: React.FC = (props) => {
    return (
        <section className="Contacts" {...props}>
            <div className="Contacts__container container">

                <div className="Contacts__wrapper">

                    <div className="Contacts__Title">КОНТАКТЫ</div>

                    <img src="/home/Line.svg" alt="-----"/>

                    <div className="Contacts__AddressWrapper">

                        <div className="Contacts__AddressRow">
                            <div className="Contacts__AddressIcon">
                                <img src="/home/Location.svg" alt="/\"/>
                            </div>

                            <div className="Contacts__AddressDescription">
                                <span>Наш Адресс</span>
                                <span>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</span>
                            </div>

                        </div>

                        <div className="Contacts__AddressRow">
                            <div className="Contacts__AddressIcon">
                                <img src="/home/Message.svg" alt="/\"/>
                            </div>

                            <div className="Contacts__AddressDescription">
                                <span>Наша почта:</span>
                                <span>auto.wash@gmail.com</span>
                            </div>

                        </div>

                    </div>

                    <img src="/home/Line.svg" alt="-----"/>

                    <div className="Contacts__ContactsWrapper">

                        <div className="Contacts__RegistrationWrapper">
                            <a className="Contacts__RegistrationButton" href="#">ЗАБРОНИРОВАТЬ СТОЛ</a>
                            <div className="Contacts__RegistrationPhoneWrapper">
                                <span>+7 (917) 510-57-59</span>
                                <span>Звоните или оставляйте заявку</span>
                            </div>
                        </div>

                        <div className="Contacts__SocialWrapper">
                            <span>Мы в соц сетях:</span>
                            <div className="Contacts__SocialIcons">
                                <a href="#"><img src="/home/facebook.svg" alt="facebook"/></a>
                                <a href="#"><img src="/home/vkontakte.svg" alt="vkontakte"/></a>
                                <a href="#"><img src="/home/youtube.svg" alt="youtube"/></a>
                                <a href="#"><img src="/home/instagram.svg" alt="instagram"/></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

Contacts = styled(Contacts, {
    marginTop: '2.1875rem', // 70 / 16 = 2.1875rem
    marginBottom: '1.25rem', // 40 / 16 = 1.25rem

    '.Contacts__wrapper': {
        paddingTop: adaptiveValue(25, 40),
        paddingBottom: adaptiveValue(25, 40),
        backgroundColor: '#2E2B2C',
        borderRadius: '0.9375rem', // 15 / 16 = 0.9375rem
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'fit-content',

        '@mobile': {
            margin: '0 auto',
        },
    },

    '.Contacts__Title': {
        fontWeight: '700',
        fontSize: '1.875rem', // 30 / 16 = 1.875rem
        lineHeight: '2.25rem', // 36 / 16 = 2.25rem
        textAlign: 'left',
        textTransform: 'uppercase',
        paddingLeft: '2.5rem', // 40 / 16 = 2.5rem
        paddingBottom: '1.875rem', // 30 / 16 = 1.875rem

        color: '$whiteText',

        '@mobile': {
            textAlign: 'center',
            paddingLeft: '0',
        },
    },

    '.Contacts__AddressWrapper': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1.875rem', // 30 / 16 = 1.875rem
        paddingBottom: '2.5rem', // 40 / 16 = 2.5rem
        paddingRight: '0.625rem', // 10 / 16 = 0.625rem

        gap: '1.875rem', // 30 / 16 = 1.875rem

        paddingLeft: adaptiveValue(50, 10), // 50 / 16 = 3.125rem, 10 / 16 = 0.625rem
    },

    '.Contacts__AddressRow': {
        display: 'flex',
    },

    '.Contacts__AddressDescription': {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.9375rem', // 15 / 16 = 0.9375rem
        lineHeight: '1.125rem', // 18 / 16 = 1.125rem

        '& span:first-child': {
            color: '$greyText',
            fontSize: '0.875rem', // 14 / 16 = 0.875rem
            fontWeight: '300',
            marginBottom: '0.3125rem', // 5 / 16 = 0.3125rem
        },

        '& span:last-child': {
            maxWidth: '25rem', // 400 / 16 = 25rem
            fontSize: '1rem', // 16 / 16 = 1rem
        },
    },

    '.Contacts__RegistrationWrapper': {
        display: 'flex',
        gap: '1.25rem 2.5rem', // 20 / 16 = 1.25rem, 40 / 16 = 2.5rem
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '0.9375rem', // 15 / 16 = 0.9375rem

        '@mobile': {
            flexDirection: 'column',
        },
    },

    '.Contacts__RegistrationButton': {
        display: 'inline-block',
        backgroundColor: '$greenLight',
        padding: '1.5625rem 1.875rem', // 25 / 16 = 1.5625rem, 30 / 16 = 1.875rem
        borderRadius: '0.625rem', // 10 / 16 = 0.625rem
        verticalAlign: 'middle',

        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '0.8125rem', // 13 / 16 = 0.8125rem
        color: '$whiteText',

        '&:hover': {
            backgroundColor: '$greenLightHover',
        },
    },

    '.Contacts__RegistrationPhoneWrapper': {
        maxWidth: 'fit-content',
        display: 'flex',
        flexDirection: 'column',

        '& span:first-child': {
            fontWeight: '700',
            fontSize: '1.4375rem', // 23 / 16 = 1.4375rem
            color: '$whiteText',
            lineHeight: '1.75rem', // 28 / 16 = 1.75rem
        },

        '& span:last-child': {
            fontWeight: '400',
            fontSize: '0.8125rem', // 13 / 16 = 0.8125rem
            lineHeight: '0.9375rem', // 15 / 16 = 0.9375rem
            color: '$greyText',
        },
    },

    '.Contacts__SocialWrapper': {
        display: 'flex',
        gap: '1.5625rem', // 25 / 16 = 1.5625rem
        justifyContent: 'center',
        marginTop: '1.875rem', // 30 / 16 = 1.875rem

        '& span': {
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '1rem', // 16 / 16 = 1rem
            textAlign: 'center',
            color: '$whiteText',
        },
    },

    '.Contacts__SocialIcons': {
        display: 'flex',
        columnGap: '0.625rem', // 10 / 16 = 0.625rem
    },

})

export { Contacts };