'use client'

import * as S from "./style";
import {Container} from "@/shared/globalComponents";
import {AddToOrderItem} from "@/widgets/Basket/AddToOrder/AddToOrderItem";
import {ArticlesInterface} from "@/db/models/types";
import {FC} from "react";

interface IndexInterface {
    list: ArticlesInterface[]
}


const Index: FC<IndexInterface> = ({ list }) => {

    return (
        <S.Section>
            <Container>

                <S.Title>ДОБАВИТЬ К ЗАКАЗУ</S.Title>

                <S.Wrapper>

                    {list.map((article) => (

                        list.indexOf(article) + 1 == list.length ? (
                                <AddToOrderItem key={article._id} article={article}/>
                            ) : (
                                <>
                                    <AddToOrderItem key={article._id} article={article}/>
                                    <S.Line></S.Line>
                                </>
                            )

                    ))}

                </S.Wrapper>

            </Container>
        </S.Section>
    );
};

export default Index







