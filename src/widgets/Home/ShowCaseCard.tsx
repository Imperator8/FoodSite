import {FC} from "react";
import {ShowCaseCard as ShowCaseCardInterface} from "@/widgets/Home/model";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import ShowCaseCardButton from "@/widgets/Home/ShowCaseCardButton";
import ShowCaseCardCircleItem from "@/widgets/Home/ShowCaseCardCircleItem";
import Link from "next/link";

let ShowCaseCard: FC<ShowCaseCardInterface> = ({item, ...props}) => {

    return (
        <div className="ShowCaseCard" {...props}>

            <ShowCaseCardCircleItem id={item._id}/>

            <img src={item.img} alt={item.title} draggable="false"/>

            <div className="ShowCaseCard__wrapper">

            <div className="ShowCaseCard__wrapperTitle">
                    <Link href={item.url} className="ShowCaseCard__Title">{item.title}</Link>
                    <span className="ShowCaseCard__Heft">Вес: {item.heft}</span>
                </div>

                <div className="ShowCaseCard__Description">{item.description}</div>

                <ShowCaseCardButton item={item} />

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
    position: 'relative',

    '&:hover': {
        boxShadow: '0.1875rem 1rem 1.875rem 0.4375rem rgba(20,20,20,1)',
        cursor: 'pointer',
    },

    '> img': {
        borderRadius: '1rem 1rem 0 0',
        height: "200%",
        maxHeight: '210px',
    },

    '.ShowCaseCard__wrapper': {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        justifyContent: 'space-around',
        height: '100%',
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
        textWrap: 'nowrap',
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
    },

    '.ShowCaseCard__Description': {
        margin: '0.9375rem 0',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        color: '$greyText',
    },

})


export default ShowCaseCard
