import React from 'react';
import RowMenu from "@/widgets/RowMenu";
import OrderPage from '@/widgets/OrderPage';
import NoSsr from '@mui/material/NoSsr';

const Page = () => {
    return (
        <>

            <main>
                <RowMenu/>

                <NoSsr>
                    <OrderPage/>
                </NoSsr>
            </main>

        </>
    );
};

export default Page;