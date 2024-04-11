import React from 'react';
import RowMenu from "@/widgets/RowMenu";
import {Container, TitleShowCase} from "@/shared/globalComponents";
import Questions from "@/widgets/Delivery/Questions";
import WorkInfo from "@/widgets/Delivery/WorkInfo";

const Page = () => {
    return (
        <>

            <main>
                <RowMenu/>

                <Container>
                    <TitleShowCase css={{ margin: "50px 0" }}>Условия доставки</TitleShowCase>
                </Container>

                <Questions/>

                <WorkInfo/>

            </main>

        </>
    );
};

export default Page;
