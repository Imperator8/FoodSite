import {FC, HTMLAttributes} from "react";
import Drug from "@/shared/Drug";
import {ShowCase as ShowCaseInterface} from "@/widgets/Home/model";
import ShowCaseCard from "@/widgets/Home/ShowCaseCard";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";

let ShowCase: FC<ShowCaseInterface> = ({list, title, sectionId, ...props}) => {

    return (
        <section id={sectionId} className='ShowCase' {...props}>
            <div className="container">

                <h2 className="ShowCase__title">
                    {title}
                </h2>

            </div>

            <Drug className="ShowCase__wrapper__cards">
                {list.map((item) => <ShowCaseCard item={item} key={item._id}/>)}
            </Drug>

        </section>
    );
};

ShowCase = styled(ShowCase, {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: adaptiveValue(50, 35),

    '.ShowCase__title': {
        borderLeft: '4px solid #618967',
        display: 'flex',
        fontWeight: 700,
        fontSize: adaptiveValue(32, 20),
        lineHeight: adaptiveValue(40, 30),
        paddingLeft: adaptiveValue(20, 10),
        textTransform: 'uppercase',
        textAlign: 'center',
        justifyContent: 'start',
        color: '#FFFFFF',
    },

    '.ShowCase__wrapper__cards': {
        gap: '20px',
        display: 'flex',
        paddingLeft: adaptiveValue(100, 50),
        paddingRight: adaptiveValue(100, 50),
        paddingBottom: adaptiveValue(100, 85),
        paddingTop: '50px',
        overflowX: 'scroll',

        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },

})

export { ShowCase };