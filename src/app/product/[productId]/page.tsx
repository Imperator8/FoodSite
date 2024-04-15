'use server'

import React from 'react';
import RowMenu from "@/widgets/RowMenu";
import {Contacts} from "@/widgets/Home/Contacts";
import Map from "@/widgets/Map";
import {CardProduct} from "@/widgets/Product/CardProduct";
import {ArticlesService} from "@/db/services/articles-service";
import {ShowCase} from "@/widgets/Home/ShowCase";
import {ArticlesInterface} from "@/db/models/types";
import {NoSsr} from "@mui/base";

const Index = async ({ params }: {params: {productId: string}}) => {

    let article: ArticlesInterface = JSON.parse(await ArticlesService.getArticlesByUrl("/product/" + params.productId))

    let recommended_list = JSON.parse(await ArticlesService.getRandomArticles(4, article.type, article._id))


    return (
        <>

            <main>
                <RowMenu/>

                <CardProduct item={article}/>

                <ShowCase list={recommended_list} title='С ЭТИМ ТОВАРОМ ПОКУПАЮТ'/>

                <Contacts/>

                <Map style={{
                    maxHeight: '540px',
                }}/>

            </main>

        </>
    );
};

export default Index;