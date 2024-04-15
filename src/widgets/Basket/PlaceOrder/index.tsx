"use client"

import * as S from './style'
import {Container} from "@/shared/globalComponents";
import {useBasket} from "@/stores/basket";
import {useRouter} from "next/navigation";

const Index = () => {

    const { push } = useRouter();

    const articles = useBasket(state => state.articles)

    let sum = 0
    const freeDelivery = 5000
    const minimumToOrder = 1500

    for (const article of Object.keys(articles).map(key => articles[key])) {
        sum += article.price * article.count
    }

    const clickHandler = () => {
        if (minimumToOrder <= sum) {
            push('/orderPage');
        }

    }

    return (
        <S.Section>
            <Container>

                <S.Wrapper>

                    <S.TextWrapper>

                        <S.TextTotal>
                            <span>Итого:</span>
                            <span>{sum} ₽ </span>
                        </S.TextTotal>

                        <S.TextDelivery>

                            <span>{freeDelivery - sum > 0 ? 'До бесплатной доставки не хватет' : `Доставка:` }</span>

                            <span>{ freeDelivery - sum > 0 ? `${freeDelivery - sum} ₽` : 'Бесплатно' }</span>

                        </S.TextDelivery>

                        <S.TextDelivery>
                            {minimumToOrder > sum ? <>
                                <span>Минимальная сума заказа</span>
                                <span>{minimumToOrder} ₽</span>
                            </> : null}

                        </S.TextDelivery>


                    </S.TextWrapper>

                    <S.Button onClick={clickHandler}>Оформить заказ</S.Button>


                </S.Wrapper>


            </Container>
        </S.Section>
    );
};

export default Index;

























