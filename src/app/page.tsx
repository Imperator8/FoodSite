// import Header from "@/widgets/Header";
// import React, {useEffect, useState} from "react";
// import {HomeHeader} from "@/widgets/Home/HomeHeader";
// import RowMenu from "@/widgets/RowMenu";
// import {ShowCase} from "@/widgets/Home/ShowCase";
// import {ShowCaseCards} from "@/widgets/Home/model";
// import {OurCafe} from "@/widgets/Home/OurCafe";
// import {Contacts} from "@/widgets/Home/Contacts";
// import Map from "@/widgets/Map";
// import Footer from "@/widgets/Footer";
// import Scrool from "@/entities/Scrool";
// import {getArticles} from "../../db/actions/articles";
// import {aws4} from "mongodb/src/deps";


import {ShowCaseCards} from "@/widgets/Home/model";
import {getArticles} from "../../db/actions/articles";

const lists: ShowCaseCards[] = [
    {
        id: 1,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 2,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 3,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 4,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 5,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 6,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 7,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 8,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
]


const lists2: ShowCaseCards[] = [
    {
        id: 101,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 102,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 103,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 104,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 105,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 106,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 107,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 108,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
]


const lists3: ShowCaseCards[] = [
    {
        id: 201,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 202,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 203,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 204,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 205,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 206,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 207,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
    {
        id: 208,
        img: "/items/1.png",
        title: 'Ягненок',
        heft: 255,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: 620,
        url: 'https://www.youtube.com'
    },
]


const Index = async () => {
    const { res, err } = await getArticles()

    return (
        <div>
            {res.title}
            {err}
        </div>
      // <>
      //   <Scrool/>
      //
      //   <Header/>
      //
      //   <main>
      //       <HomeHeader/>
      //       <RowMenu/>
      //
      //       <ShowCase list={lists} title="ХОЛОДНЫЕ ЗАКУСКИ"/>
      //       <ShowCase list={lists2} title="ГОРЯЧИЕ ЗАКУСКИ"/>
      //       <ShowCase list={lists3} title="МЯСНЫЕ БЛЮДА"/>
      //
      //       <OurCafe/>
      //       <Contacts/>
      //
      //       <Map/>
      //
      //   </main>
      //
      //   <Footer/>
      // </>
  );
};


export default Index






