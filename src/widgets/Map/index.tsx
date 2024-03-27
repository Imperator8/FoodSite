import {CSSProperties, FC} from "react";
import {styled} from "@/shared/globalStyles";


export interface MapInterface {
    style?: CSSProperties
}

let Index: FC<MapInterface> = ({ style, ...props }) => {

    return (
        <div id="Map" style={style} {...props}></div>
    );
};

Index = styled(Index, {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: -1,

    backgroundImage: 'url("/home/Map.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',

    maxHeight: '666px',
    height: '100%',
    width: '100%',

    '@tablet': {
        maxHeight: '1100px !important',
        height: '80%',
        backgroundImage: 'url("/home/MapMobile.png")',
        backgroundPosition: 'center bottom',
        marginTop: 500
    },

})

export default Index;