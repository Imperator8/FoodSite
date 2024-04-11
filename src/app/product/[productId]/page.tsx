import React from 'react';
import RowMenu from "@/widgets/RowMenu";
import {Contacts} from "@/widgets/Home/Contacts";
import Map from "@/widgets/Map";
import {CardProduct} from "@/widgets/Product/CardProduct";
import {ArticlesService} from "@/db/services/articles-service";
import {ShowCase} from "@/widgets/Home/ShowCase";
import {ArticlesInterface} from "@/db/models/types";

const Index = async ({ params }: {params: {productId: string}}) => {

    const article: ArticlesInterface = JSON.parse(await ArticlesService.getArticlesByUrl("/product/" + params.productId))

    const recommended_list = JSON.parse(await ArticlesService.getRandomArticles(4, article.type, "6617e57e4e3e7e319a34819d"))

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