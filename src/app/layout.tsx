import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {getCssText, setupStyle} from "@/shared/globalStyles";
import Footer from "@/widgets/Footer";
import React from "react";
import Header from "@/widgets/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Food Project",
    description: "Food",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode; }>) {
    setupStyle()
    return (
        <html lang="ru">
            <head>
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
            </head>
            <body className={inter.className}>
                <div className='wrapper'>
                    <Header/>

                    {children}

                    <Footer/>
                </div>
            </body>
        </html>
    );
}
