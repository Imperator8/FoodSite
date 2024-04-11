import {styled} from "@/shared/globalStyles";
import {Button as ButtonMUI} from "@mui/base";


export const Section = styled("section", {
    marginBottom: 90
})

export const Wrapper = styled("div", {
    maxWidth: 765,
    margin: "0 auto",
    backgroundColor: "rgba(73, 69, 68, 1)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    padding: "25px 25px 10px 40px",
    alignItems: "center",

    '@mobile': {
        flexDirection: "column",
        padding: "25px 10px 15px 10px",
        gap: 20,
    }

})


export const TextWrapper = styled("div", {

    display: "flex",
    flexDirection: "column",
    gap: 10,

    '@mobile': {
        alignItems: "center"
    }

})


export const TextTotal = styled("div", {
    display: "flex",
    gap: 5,
    alignItems: "end",

    "span:first-child": {
        color: "#A6A7AB",
        fontWeight: 500,
        fontSize: 18,
    },

    "span:last-child": {
        color: "#fff",
        fontWeight: 500,
        fontSize: 30,
    }
})


export const TextDelivery = styled("div", {
    display: "flex",
    gap: 5,

    "span:first-child": {
        color: "#FFFFFF",
        fontWeight: 500,
        fontSize: 12,
    },

    "span:last-child": {
        color: "#72A479",
        fontWeight: 500,
        fontSize: 12,
    }

})


export const Button = styled(ButtonMUI, {

    padding: "10px 50px",
    backgroundColor: "$greenLight",
    height: "50px",
    borderRadius: 10,
    backgroundSize: 14,

    "&:hover": {
        backgroundColor: "$greenLightHover",
    }

})
























