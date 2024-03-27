import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {getCssText, setupGlobalStyle} from "../shared/globalStyles";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Food Project",
    description: "Food",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode; }>) {
    setupGlobalStyle()
    return (
        <html lang="en">
            <head>
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
            </head>
            <body className={inter.className}>
                <div className='wrapper'>
                    {children}
                </div>
            </body>
        </html>
    );
}
