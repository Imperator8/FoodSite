import {styled} from "@/shared/globalStyles";


export const Section = styled("section", {
    margin: "45px 0"
})



export const Title = styled("h2", {
    fontWeight: 700,
    fontSize: 25,
    color: "fff",
})


export const Wrapper = styled("div", {
    margin: "30px 0 80px 0",
    backgroundColor: "rgba(73, 69, 68, 1)",
    justifyContent: "space-around",
    padding: "0 10px",
    borderRadius: 10,
    display: 'flex',
    gap: 10,
    position: "relative",


    '&:before': {
        position: "absolute",
        bottom: -30,
        left: "2%",
        content: "",
        width: "95%",
        height: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)"

    },

    "@mobile": {
        flexDirection: "column",
        justifyContent: "start",
    }


})

export const Line = styled("div", {
    backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
    width: 1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",

    "@mobile": {
        width: "100%",
        height: 1
    }

})


export const ItemWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
    margin: "20px 0 15px 0"
})

export const ItemImg = styled("div", {

    "img": {
        maxWidth: "100%",
        maxHeight: 123,
        borderRadius: 10,
    }

})


export const SubTitle = styled("h4", {
    fontWeight: 700,
    fontSize: 14,
})


export const AddButtonWrapper = styled("div", {

    fontWeight: 400,
    fontSize: 12,

    color: "#C6CED1",
    userSelect: 'none',

    "label": {
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: 'pointer'
    },

    "button": {
        backgroundColor: "#66906C",
        width: 20,
        height: 20,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&:hover": {
            backgroundColor: "#395e40",
        }

    }

})


export const Price = styled("span", {
    fontWeight: 700,
    fontSize: 12,

    color: "#FFFFFF"


})


















