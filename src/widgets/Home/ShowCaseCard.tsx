import {FC} from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {ShowCaseCard as ShowCaseCardInterface} from "@/widgets/Home/model";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";

let ShowCaseCard: FC<ShowCaseCardInterface> = ({item, ...props}) => {

    return (
        <div className="ShowCaseCard" {...props}>
            <img src={item.img} alt={item.title} draggable="false"/>

            <div className="ShowCaseCard__wrapper">

                <div className="ShowCaseCard__wrapperTitle">
                    <span className="ShowCaseCard__Title">{item.title}</span>
                    <span className="ShowCaseCard__Heft">Вес: {item.heft}</span>
                </div>

                <div className="ShowCaseCard__Description">{item.description}</div>

                <div className="ShowCaseCard__wrapperPrice">
                    <span className="ShowCaseCard__Price">{item.price} ₽</span>
                    <button className="ShowCaseCard__Button">
                        <span>В корзину</span>
                        <ShoppingCartOutlinedIcon className='basket__icon' fontSize='small'/>
                    </button>
                </div>

            </div>
        </div>
    );
};

ShowCaseCard = styled(ShowCaseCard, {
        maxWidth: '20rem',
        width: adaptiveValue(320, 300),
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
        borderRadius: '1rem',
        transition: 'transform 0.2s',

        '&:hover': {
            boxShadow: '0.1875rem 1rem 1.875rem 0.4375rem rgba(20,20,20,1)',
            cursor: 'pointer',
        },

        '> img': {
            borderRadius: '1rem 1rem 0 0',
        },

        '.ShowCaseCard__wrapper': {
            padding: '1.125rem',
        },

        '.ShowCaseCard__wrapperTitle': {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
        },

        '.ShowCaseCard__Title': {
            fontWeight: '700',
            fontSize: '1.375rem',
            color: '$whiteText',
        },

        '.ShowCaseCard__Heft': {
            fontWeight: '300',
            fontSize: '0.75rem',
            color: '$whiteText',
        },

        '.ShowCaseCard__Description': {
            margin: '0.9375rem 0',
            fontWeight: '400',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: '$greyText',
        },

        '.ShowCaseCard__wrapperPrice': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        '.ShowCaseCard__Price': {
            fontWeight: '600',
            fontSize: '1.25rem',
            color: '$whiteText',
        },

        '.ShowCaseCard__Button': {
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '0.8125rem 1.25rem 0.8125rem 1.25rem',
            background: 'linear-gradient(to bottom right, rgba(97, 137, 103, 1), rgba(114, 164, 121, 1))',
            borderRadius: '1rem',
            fontWeight: '600',
            fontSize: '0.875rem',
            color: '$whiteText',

            '&:hover': {
                boxShadow: '0 0.3125rem 1.25rem rgb(68, 114, 76)',
            },
        },
})


export { ShowCaseCard }
