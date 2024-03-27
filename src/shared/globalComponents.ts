import {adaptiveValue} from "@/shared/globalStyleFunction";
import {maxContainerWidth, paddingContainer, styled} from "@/shared/globalStyles";



export const Container = styled("div", {
    maxWidth: maxContainerWidth,
    margin: '0 auto',
    padding: `0 ${paddingContainer/2}px`
})




export const TitleShowCase = styled("h2", {

    borderLeft: "4px solid #618967",
    display: "flex",

    fontWeight: 700,
    fontSize: adaptiveValue(32, 20),
    lineHeight: adaptiveValue(40, 30),
    paddingLeft: adaptiveValue(20, 10),
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "start",

    color: "$whiteText"

})

















