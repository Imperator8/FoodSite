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
import {transliterate} from "transliteration"
import {ArticlesInterface, ArticlesTypesDict} from "@/db/models/types";
import {AddToOrderServices} from "@/db/services/addToOrder-service";
import {HomeHeader} from "@/widgets/Home/HomeHeader";



const namesShowCase = {
    cold: "Холодные закуски",
    hot: "Горячие закуски",
    meat: "Мясные блюда",
    fish: "Рыбные блюда",
    grill: "Гриль меню",
    signature: "Фирменные блюда",
    drinks: "Напитки",
}

const Index = async () => {

    // await writeWithStore()

    const hot_list: ArticlesTypesDict = await ArticlesService.getArticlesListTypes()

    return (
        <>
            <NoSsr>
                <Scrool/>
            </NoSsr>

            <main>
                <HomeHeader/>
                <RowMenu/>

                {
                    Object.keys(hot_list).map(id => {
                        // @ts-ignore
                        if (hot_list[id].length !== 0) {
                            // @ts-ignore
                            return <ShowCase key={id} list={hot_list[id]} title={namesShowCase[id]} sectionId={id}/>
                        }
                    })
                }

                <OurCafe/>
                <Contacts/>

                <Map/>
            </main>

        </>
  );
};


export default Index






