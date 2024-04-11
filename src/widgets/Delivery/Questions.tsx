import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {Container} from "@/shared/globalComponents";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import Map from "./Map";


const list = [
    {
        id: 1,
        name: "У наших курьеров всегда должна быть сдача!",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
    {
        id: 2,
        name: "Вам что-то не довезли?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
    {
        id: 3,
        name: "Не понравился продукт?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
    {
        id: 4,
        name: "Если появились замечания",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
    {
        id: 5,
        name: "Оплата Visa, MasterCard и МИР",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
    {
        id: 6,
        name: "Реквизиты",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur assumenda aut cumque deleniti earum eius eos eveniet fugit harum ipsam ipsum itaque laborum laudantium maxime molestiae neque nisi non numquam odit omnis provident, quas quasi quos, reiciendis repellat sequi. Ad deserunt dolore dolorum et expedita nisi pariatur repellendus?"
    },
]


const Index = () => {
    return (
        <section>

            <ContainerStyle>

                <WrapperInfoButtons>

                    {list.map(item => (
                        <AccordionStyle key={item.id}>
                            <AccordionSummaryStyle
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {item.name}
                            </AccordionSummaryStyle>
                            <AccordionDetailsStyle>
                                {item.description}
                            </AccordionDetailsStyle>
                        </AccordionStyle>
                    ))}

                </WrapperInfoButtons>

                <WrapperDeliveryImg>
                    <Map/>
                </WrapperDeliveryImg>


            </ContainerStyle>

        </section>
    );
};


const ContainerStyle = styled(Container, {
    display: "flex",
    gap: 20,
    height: "fit-content",
    rowGap: 40,
    marginBottom: "40px !important",


    "@mobile": {
        flexDirection: "column-reverse"
    }

})


const AccordionStyle = styled(Accordion, {
    color: "$whiteText",
    backgroundColor: "$greyBackground !important",
    borderRadius: "10px !important",
    margin: "0 !important"

})


const AccordionSummaryStyle = styled(AccordionSummary, {
    backgroundColor: "$greenLightBackground !important",
    color: "$whiteText !important",
    borderRadius: "10px !important",
    paddingLeft: "30px !important",
    fontSize: adaptiveValue(18, 14),

    "> div": {
        margin: `${adaptiveValue(25, 10)} 0 !important`
    }

});


const AccordionDetailsStyle = styled(AccordionDetails, {
    backgroundColor: "$greyBackground",
    borderRadius: "0 0 10px 10px",
    color: "$whiteText",
    fontSize: adaptiveValue(16, 12),
    padding: "40px 30px !important",
    lineHeight: "25px",
    fontWeight: 300
})



const WrapperInfoButtons = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1
})

const WrapperDeliveryImg = styled("div", {
    flex: 1
})


export default Index;