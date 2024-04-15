import {createStitches} from "@stitches/react";



const minWidth: number = 320
const maxWidth: number = 1920
const fontFamily: string = `'Roboto', sans-serif`
const fontSize: string = "1rem"

const mainColor: string = "#fff"

const maxContainerWidth: number = 1270;
const paddingContainer: number = 30;
const containerWidth: number = maxContainerWidth + paddingContainer


const { globalCss, getCssText, styled, css } = createStitches({
    theme: {
        colors: {
            greyText: "#CFCFCF",
            whiteText: "#FFFFFF",
            extraGreyText: "#504B4A",
            extraGreyTextHover: "#44403f",
            greenLight: "#5b8361",
            greenLightHover: "#395e40",
            greyBackground: "rgba(73, 69, 68, 1)",
            greenLightBackground: "#618967"
        }
    },
    media: {
        pc: `(max-width: ${containerWidth}px)`,
        tablet: `(max-width: 992px)`,
        mobile: `(max-width: 768px)`,
        mobileSmall: `(max-width: 480px)`,
    }
})


const setupStyle = globalCss({

    "*": {
        padding: "0px",
        margin: "0px",
        border: "0px"
    },
    "*:before": {
        boxSizing: "border-box"
    },
    "*:after": {
        boxSizing: "border-box"
    },
    html: {
        height: "100%",
        minWidth: `${minWidth}px`,
        scrollBehavior: "smooth !important"
    },

    main: {
        position: "relative",
    },

    'main:has(#Map)': {

        "@tablet": {
            paddingBottom: '500px'
        }

    },

    body: {
        height: "100%",
        minWidth: `${minWidth}px`,
        color: mainColor,
        lineHeight: "1",
        fontFamily: fontFamily,
        fontSize: fontSize,
        // textRendering: "optimizeLegibility",
        msTextSizeAdjust: "100%",
        mozTextSizeAdjust: "100%",
        webkitTextSizeAdjust: "100%",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        backgroundImage: "linear-gradient(360deg, #211F20 0%, #44403F 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    input: {
        fontFamily: fontFamily,
        fontSize: "inherit"
    },
    button: {
        cursor: "pointer",
        color: "inherit",
        backgroundColor: "inherit"
    },
    a: {
        color: "inherit"
    },
    "a:link": {
        textDecoration: "none"
    },
    "a:visited": {
        textDecoration: "none"
    },
    "a:hover": {
        textDecoration: "none"
    },
    "ul li": {
        listStyle: "none"
    },
    img: {
        verticalAlign: "top"
    },
    "h1, h2, h3, h4, h5, h6": {
        fontWeight: "inherit",
        fontSize: "inherit"
    },
    "#root": {
        height: "100%"
    },

    ".wrapper": {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",

        "> main": {
            flex: "1 1 auto"
        },

        "> *": {
            minWidth: 0
        }
    },

    '.container': {
        maxWidth: maxContainerWidth,
        margin: '0 auto',
        padding: `0 ${paddingContainer/2}px`
    },

    '.MuiMenu-list': {
        backgroundColor: 'rgba(73, 69, 68, 1)',
        color: '$whiteText !important',
    },

    '.MuiTabs-scrollButtonsHideMobile': {
        display: 'none !important'
    },

    '.startDecorator, .endDecorator': {
        color: '$whiteText',
    },

    '.MuiAutocomplete-option:hover': {
        backgroundColor: '$extraGreyTextHover !important',
        color: '$whiteText !important'
    },

    '.MuiAutocomplete-listbox': {
        backgroundColor: '$extraGreyText',
        border: 'none',
        color: '$whiteText',

        '> *': {
            color: '$whiteText',
            backgroundColor: '$extraGreyText !important',
        },

        '&:hover': {
            backgroundColor: '$extraGreyText',
        },
    },

    '.Scroll': {
        display: 'none'
    }

})


export {
    maxContainerWidth,
    paddingContainer,
    styled,
    getCssText,
    setupStyle,
    css,

    maxWidth,
    minWidth,
    containerWidth
}





