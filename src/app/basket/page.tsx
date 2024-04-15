import React from 'react';
import {NoSsr} from "@mui/base";
import RowMenu from "@/widgets/RowMenu";
import TitleBasket from "@/widgets/Basket/TitleBasket";
import ItemsBasket from "@/widgets/Basket/ItemsBasket";
import AddToOrder from "@/widgets/Basket/AddToOrder";
import PlaceOrder from "@/widgets/Basket/PlaceOrder";
import {ArticlesInterface} from "@/db/models/types";
import {AddToOrderServices} from "@/db/services/addToOrder-service";

const Page = async () => {

    const list: ArticlesInterface[] = await AddToOrderServices.getArticles()

    return (
        <>

            <main>
                <RowMenu/>

                <NoSsr>
                    <TitleBasket/>

                    <ItemsBasket/>

                    <AddToOrder list={list}/>

                    <PlaceOrder/>
                </NoSsr>

            </main>

        </>
    );
};

export default Page;






