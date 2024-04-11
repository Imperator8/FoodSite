import {styled} from "@/shared/globalStyles";


const Index = () => {
    return (
        <ContainerImg>
            <img src="/delivery/map.png" alt="#"/>
        </ContainerImg>
    );
};

const ContainerImg = styled("div", {

    "img": {
        maxWidth: "100%",
        borderRadius: 10,
    }

})

export default Index;




