import {Box, TextField} from "@mui/material";
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";


export const FormContentBox = styled('div', {

    background: "linear-gradient(90deg, #494544 0%, #504B4A 100%)",
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: adaptiveValue(30, 25),
    paddingRight: adaptiveValue(30, 25),

})

export const FormContentBoxTitle = styled('h3', {
    fontWeight: 700,
    fontSize: "1.2rem",
    lineHeight: "1.4rem",

    color: '$whiteText',
})

export const FormContentBoxInput = styled(TextField, {
    width: '100%',
    border: '1px solid rgba(255, 255, 255, .1)',
    borderRadius: '10px',

    "& div": {

        "&:hover": {
            borderColor: 'red !important'
        },

    },

    'input': {
        background: 'none !important',
        color: '#fff !important',

        '&::placeholder': {
            color: '#fff !important',
        }
    },

    'fieldset': {
        borderColor: 'rgba(255, 255, 255, .1)',
        display: 'none'
    }

})

export const OrderInputsContainer = styled(Box, {
    gap: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',

    '@mobile': {
        width: '100%'
    }




})

export const OrderInputsWrapper1 = styled(Box, {
    display: 'flex',
    width: '100%',
    gap: '15px',

    '@mobile': {
        flexDirection: 'column'
    }

})

export const OrderInputsWrapper2 = styled(Box, {
    display: 'flex',
    gap: '15px',
    width: '100%',

    '@mobile': {
        flexDirection: 'column'
    }

})