'use client'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {styled} from "@/shared/globalStyles";
import {FC, HTMLAttributes} from "react";
import {useBasket} from "@/stores/basket";
import Link from "next/link";

interface IndexInterface extends HTMLAttributes<HTMLButtonElement>{

}



const Index: FC<IndexInterface> = ({...props}) => {

    useBasket((state) => state.articles)
    const articlesLen = useBasket((state) => state.calculateArticles)()


    return (
        // @ts-ignore
        <LinkStyle href={'/basket'} {...props}>

            <BasketWrapperIcon className="basket__wrapper__icon">
                <ShoppingCartOutlinedIcon className='basket__icon' fontSize='medium'/>
            </BasketWrapperIcon>

            <BasketSpan>Корзина</BasketSpan>

            {articlesLen != 0 &&
                <Items>
                    <ItemsWrapper className="basket__items__wrapper">
                        {articlesLen}
                     </ItemsWrapper>
                </Items>}

        </LinkStyle>
    );
};

const LinkStyle = styled(Link, {
    backgroundColor: '$greenLight',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifySelf: 'flex-end',
    height: '50px',
    marginLeft: 'auto',

    '@mobile': {
        flexDirection: 'column',
        padding: '5px',
        marginLeft: 0,
    },

    '&:hover': {
        backgroundColor: '$greenLightHover',
    },
})

const BasketSpan = styled('span', {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '38px',
    color: '$whiteText',
    margin: '0 20px',

    '@mobile': {
        margin: '0',
        lineHeight: '14px',
        fontSize: '12px',
    }
})

const BasketWrapperIcon = styled('div', {
    display: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    width: '100%',
    color: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: '2px',
    paddingBottom: '2px',

    '@mobile': {
        display: 'flex',
    },
})

const Items = styled('div', {
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',

    '@mobile': {
        display: 'none',
    },
})

const ItemsWrapper = styled('div', {
    color: '#211F20',
    fontWeight: '600',
    padding: '4px 10px',
    backgroundColor: '$whiteText',
    borderRadius: '50px',
    maxHeight: 'fit-content',
    margin: 'auto 12px',
})


export default Index;