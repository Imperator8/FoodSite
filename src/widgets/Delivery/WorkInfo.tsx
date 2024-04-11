import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import {Container} from "@/shared/globalComponents";


const WorkInfo = () => {
    return (
        <section>

            <ContainerStyle>

                <TextWrapper>

                    <TextsRow>

                        <TextRowBlock>

                            <span>График работы доставки:</span>

                            <span>с 10:00-21:00</span>

                        </TextRowBlock>

                        <TextRowBlock>

                            <span>График работы кафе:</span>

                            <span>с 8:00-21:00</span>

                        </TextRowBlock>

                    </TextsRow>

                    <TextRowBlock>

                        <span>Минимальный заказ:</span>

                        <span>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ Доставка оператором такси от любой суммы заказа - по тарифам перевозчика.</span>

                    </TextRowBlock>

                </TextWrapper>


            </ContainerStyle>

        </section>
    );
};

export const ContainerStyle = styled(Container, {

})

const TextWrapper = styled("div", {

    display: "flex",
    flexDirection: "column",
    rowGap: 60,
    maxWidth: 700,
    marginBottom: 35,


    "@mobile": {
        rowGap: 40
    }

})


const TextsRow = styled("div", {
    display: "flex",
    columnGap: 100,
    rowGap: 40,

    "@mobile": {
        flexDirection: "column",
    }

})

const TextRowBlock = styled("div", {
    fontSize: adaptiveValue(22, 18),
    display: "flex",
    flexDirection: "column",
    gap: 10,
    lineHeight: "35px",

    "span:first-child": {
        fontWeight: 600,
    },

    "span:last-child": {
        fontWeight: 300,
        color: "$greyText"
    }


})

export default WorkInfo;