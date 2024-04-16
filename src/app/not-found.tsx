import React from 'react';
import RowMenu from "@/widgets/RowMenu";
import TextPage from "@/components/TextPage";
import {ButtonLink} from "@/components/ButtonLink";

const Page = () => {
    return (
        <main>
            <RowMenu/>

            <div className="content" style={{ margin: '50px auto', gap: '15px', width: 'fit-content', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <TextPage>404 Страницца не найдена</TextPage>

                <p style={{ color: '#e1e1e1' }}>Запрашиваемой вамы страниццы не существует</p>

                <ButtonLink href={'/#cold'}>Главное меню</ButtonLink>
            </div>

        </main>
    );
};

export default Page;