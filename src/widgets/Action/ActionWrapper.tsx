import {ActionCard} from "@/widgets/Action/ActionCard";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import {CardInterface} from "@/widgets/Action/models";
import {Container, TitleShowCase} from "@/shared/globalComponents";




const list: CardInterface[] = [
    {
        id: 1,
        img: "action/meat.png",
        title: "Без мяса? Здесь!",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 2,
        img: "action/combo.png",
        title: "Выгодное комбо c напитками",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 3,
        img: "action/cheese.png",
        title: "Сырный бортик",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 4,
        img: "action/meat.png",
        title: "Без мяса? Здесь!",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 5,
        img: "action/combo.png",
        title: "Выгодное комбо c напитками",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 6,
        img: "action/cheese.png",
        title: "Сырный бортик",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 7,
        img: "action/meat.png",
        title: "Без мяса? Здесь!",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 8,
        img: "action/combo.png",
        title: "Выгодное комбо c напитками",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },
    {
        id: 9,
        img: "action/cheese.png",
        title: "Сырный бортик",
        description: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
        date: "01.03.2024"
    },

]





const ActionWrapper = () => {
    return (
        <section>

            <TitleWrapper>

                <Container>
                    <TitleShowCase>АКЦИИ</TitleShowCase>
                </Container>

            </TitleWrapper>

            <Container>

                <ContentWrapper>

                    {list.map((item) => (
                        <ActionCard key={item.id} id={item.id} img={item.img} title={item.title} description={item.description} date={item.date}/>
                    ))}

                </ContentWrapper>

            </Container>



        </section>
    );
};

const TitleWrapper = styled("div", {
    paddingTop: adaptiveValue(50, 40),
    paddingBottom: 30,
    position: "relative",

    "&:before": {
        position: "absolute",
        backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
        height: 1,
        width: "100%",
        bottom: 0,
        left: 0,
        content: ""
    }

})


const ContentWrapper = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 400px))",
    gap: "50px 20px",
    marginTop: 40,
    marginBottom: 130,
    justifyContent: "center",

    "@mobile": {
        rowGap: 30
    }


})

export default ActionWrapper;















