import React from 'react';
import {NoSsr} from "@mui/base";
import RowMenu from "@/widgets/RowMenu";
import TitleBasket from "@/widgets/Basket/TitleBasket";
import ItemsBasket from "@/widgets/Basket/ItemsBasket";
import AddToOrder from "@/widgets/Basket/AddToOrder";
import PlaceOrder from "@/widgets/Basket/PlaceOrder";

const Page = () => {
    return (
        <>

            <main>
                <RowMenu/>

                <TitleBasket/>

                <NoSsr>
                    <ItemsBasket/>
                </NoSsr>

                <AddToOrder/>

                <PlaceOrder/>

            </main>

        </>
    );
};

export default Page;






