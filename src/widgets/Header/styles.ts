import {styled} from "@/shared/globalStyles";
import {Container as ContainerImport} from "@/shared/globalComponents";


export const Header = styled('header', {
    padding: '23px 0',
    width: '100%',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
})


export const Container = styled(ContainerImport, {
    display: 'flex',
    rowGap: '10px',
})


export const MobileWrapper = styled("div", {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '10px',

    '@mobile': {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

})


const styles = {
    header: {

    },
}

















