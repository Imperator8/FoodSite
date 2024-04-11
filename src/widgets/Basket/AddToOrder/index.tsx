import * as S from "./style";
import {Container} from "@/shared/globalComponents";
import {AddToOrderItem} from "@/widgets/Basket/AddToOrder/AddToOrderItem";
import {AddToOrderServices} from "@/db/services/addToOrder-service";
import {ArticlesInterface} from "@/db/models/types";


const Index = async () => {

    const list: ArticlesInterface[] = await AddToOrderServices.getArticles()

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







