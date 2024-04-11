'use client'

import * as S from './style'
import {Container} from "@/shared/globalComponents";
import {useBasket} from "@/stores/basket";

const Index = () => {

    const articles = useBasket(state => state.articles)

    let sum = 0
    const freeDelivery = 5000
    const minimumToOrder = 1500

    for (const article of Object.keys(articles).map(key => articles[key])) {
        sum += article.price * article.count
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
                            <span>Минимальная сума заказа {minimumToOrder} ₽</span>
                            <span></span>
                        </S.TextDelivery>


                    </S.TextWrapper>

                    <S.Button >Оформить заказ</S.Button>


                </S.Wrapper>


            </Container>
        </S.Section>
    );
};

export default Index;

























