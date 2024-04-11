import {FC} from "react";
import {CardInterface} from "@/widgets/Action/models";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";



const getDate = (dateString: string) => {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    const parts = dateString.split(".");
    const day = parseInt(parts[0]);
    const monthIndex = parseInt(parts[1]) - 1; // уменьшаем на 1, так как месяцы в JavaScript начинаются с 0
    const monthName = months[monthIndex];

    return `${day} ${monthName}`;
}

const ActionCard: FC<CardInterface> = (props) => {



    return (
        <Card>

            <CardImage>
                <img src={props.img} alt=""/>
            </CardImage>

            <CardContent>

                <CardTitle>{props.title}</CardTitle>

                <CardDescription>{props.description}</CardDescription>

                <CardDate>до {getDate(props.date)}</CardDate>

            </CardContent>


        </Card>
    )

}


const Card = styled("div", {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(73, 69, 68, 1)",
    borderRadius: 10,
    maxWidth: "fit-content",

})

const CardImage = styled("div", {


    "img": {
        maxWidth: "100%",
    }

})

const CardContent = styled("div", {
    display: "flex",
    flexDirection: "column",
    padding: "20px 25px",


})


const CardTitle = styled("span", {
    fontWeight: 700,
    fontSize: adaptiveValue(18, 16),

    color: "#FFFFFF",
})

const CardDescription = styled("p", {

    fontWeight: 400,
    fontSize: adaptiveValue(16, 14),

    color: "$greyText",
    marginTop: 20,
    marginBottom: 25,
    lineHeight: "20px",


})

const CardDate = styled("p", {

    fontWeight: 400,
    fontSize: adaptiveValue(14, 12),

    color: "#6FA076",

})


export { ActionCard }




