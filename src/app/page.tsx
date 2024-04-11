import React from "react";
import RowMenu from "@/widgets/RowMenu";
import {ShowCase} from "@/widgets/Home/ShowCase";
import {OurCafe} from "@/widgets/Home/OurCafe";
import {Contacts} from "@/widgets/Home/Contacts";
import Map from "@/widgets/Map";
import Scrool from "@/entities/Scrool";


import * as fs from "fs";
import {NoSsr} from "@mui/base";
import { ArticlesService } from "@/db/services/articles-service";
import dynamic from "next/dynamic";
import {transliterate} from "transliteration"
import {ArticlesInterface} from "@/db/models/types";
import {AddToOrderServices} from "@/db/services/addToOrder-service";

const HomeHeader = dynamic(() => import('@/widgets/Home/HomeHeader').then(module => module.HomeHeader),{ ssr: false });

const writeWithStore = async () => {
    const jsonData = fs.readFileSync('./src/app/js.json', 'utf-8');
    let data = JSON.parse(jsonData);

    data = data.map((item: ArticlesInterface) => {
        let newItem = item
        newItem.url = "/product/" + transliterate(item.title).replaceAll(" ", "-").toLowerCase()
        return newItem
    })

    await AddToOrderServices.resetArticles()

    await AddToOrderServices.writeArticles(data)

}

const Index = async () => {

    // await writeWithStore()

    const hot_list = await ArticlesService.getArticlesListTypes()

    return (
        <>
            <NoSsr>
                <Scrool/>
            </NoSsr>

            <main>
                <HomeHeader/>
                <RowMenu/>

                <ShowCase list={hot_list} title="ГОРЯЧИЕ ЗАКУСКИ" sectionId='hot'/>

                <OurCafe/>
                <Contacts/>

                <Map/>
            </main>

        </>
  );
};


export default Index






