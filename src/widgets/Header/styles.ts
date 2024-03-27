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

    '@mobile': {
        flexDirection: 'column',
    },

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

        '.autocomplete:last-child': {
            display: 'none',

            '@media screen and (max-width: $mobile)': {
                display: 'flex',
                maxWidth: '100%',
            },
        },

        '&__center__wrapper': {
            display: 'flex',
            marginInlineStart: 70,
            marginInlineEnd: 0,
            marginRight: 'auto',
            width: '100%',

            '@media screen and (max-width: $mobile)': {
                display: 'none',
            },
        },

        '&__logo': {
            marginTop: 'auto',
            marginBottom: 'auto',
        },

    },
}

















