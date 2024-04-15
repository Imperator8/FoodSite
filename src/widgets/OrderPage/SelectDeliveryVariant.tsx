'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {FC} from "react";
import {FormContentBoxInput, OrderInputsContainer as OIC, OrderInputsWrapper1, OrderInputsWrapper2} from "./FormContentBox";
import {SelectChangeEvent, FormControl, MenuItem, Select, Box} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";
import {styled} from "@/shared/globalStyles";
import {useFormData} from "@/stores/formStore";
import {deliveryVariants, restorations} from "@/stores/formStore";



export const TabsStyle = styled(Tabs, {
    maxWidth: 'fit-content',
    border: '2px solid #72A479',
    borderRadius: 10,
    display: 'flex',
    margin: '30px 0',

    '&.Mui-selected': {
        backgroundColor: 'red'
    },

    '& div div.MuiInputBase-colorPrimary:hover': {
        backgroundColor: 'red'
    },

    ".MuiButtonBase-root": {
        fontWeight: "100 !important",
    },

    '& button': {
        color: '$whiteText',
        maxWidth: '180px',
        width: '100%',
        padding: '0 50px',
        textTransform: 'none',
        textWrap: 'nowrap !important',
    },

    '& button.Mui-selected': {
        backgroundColor: 'rgba(97, 137, 103, 1)',
        fontWeight: '900',
        color: '$whiteText'
    },

})


const TextH3 = styled('h3', {

    fontWeight: 700,
    fontSize: "16px",

    color: "#FFFFFF",
    marginBottom: '10px'

})

const SelectStyle = styled(Select, {
    color: '$whiteText !important',
    border: '1px solid rgba(255, 255, 255, .1)',

    'fieldset': {
        display: 'none'
    },

    "&.MuiInputBase-formControl": {
        boxShadow: 'none !important',
    },

})



interface TabsInterface {
    value: number,
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

const TabsContainer: FC<TabsInterface> = ({ value, handleChange }) => {


    return (
        <TabsStyle value={value} onChange={handleChange} scrollButtons variant="scrollable" TabIndicatorProps={{ style: {
                display: 'none'
            }}}>
            <Tab label="Доставка" />
            <Tab label="Самовывоз" />
        </TabsStyle>
    )
}

const OrderInputsContainer = () => {

    const dates = useFormData(state => state.dates)
    const setValue = useFormData(state => state.setValue)

    const handleChangeStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('street', event.target.value);
    };

    const handleChangeHome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('numberBuild', event.target.value);
    };

    const handleChangeApartment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('numberApartment', event.target.value);
    };

    const handleChangeFloor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('floor', event.target.value);
    };

    const handleChangeEntrance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('entrance', event.target.value);
    };

    const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('comment', event.target.value);
    };




    return (
        <OIC >

            <TextH3>Адрес доставки</TextH3>

            <OrderInputsWrapper1>

                <FormContentBoxInput
                    id="input-street"
                    placeholder="Укажите улицу*"
                    css={{
                        borderColor: dates.errors.includes('street') ? 'red !important' : 'rgba(255, 255, 255, .1)',
                    }}
                    value={dates.street}
                    onChange={handleChangeStreet}
                    style={{ flex: '3' }}
                />
                <FormContentBoxInput
                    id="input-home"
                    placeholder="Номер дома*"
                    css={{
                        borderColor: dates.errors.includes('numberBuild') ? 'red !important' : 'rgba(255, 255, 255, .1)',
                    }}
                    value={dates.numberBuild}
                    onChange={handleChangeHome}
                    style={{ flex: '1' }}
                />

            </OrderInputsWrapper1>

            <OrderInputsWrapper2>

                <FormContentBoxInput
                    id="input-apartment"
                    placeholder="№ квартиры/офиса"

                    value={dates.numberApartment}
                    onChange={handleChangeApartment}
                />
                <FormContentBoxInput
                    id="input-entrance"
                    placeholder="Подъезд"
                    value={dates.entrance}
                    onChange={handleChangeEntrance}
                />
                <FormContentBoxInput
                    id="input-floor"
                    placeholder="Этаж"
                    value={dates.floor}
                    onChange={handleChangeFloor}
                />

            </OrderInputsWrapper2>


            <FormContentBoxInput
                id="input-comment"
                placeholder="Комментарий"
                value={dates.comment}
                onChange={handleChangeComment}
            />
        </OIC>
    )

}


const SelectRestaurants = () => {

    const restaurant = useFormData(state => state.dates.restaurant)
    const setValue = useFormData(state => state.setValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('restaurant', restorations[Number(event.target.value)]);
    };

    return (
        <FormControl style={{ maxWidth: '100%' }}>
            <SelectStyle
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={restorations.indexOf(restaurant)}
                // @ts-ignore
                onChange={handleChange}
                IconComponent={() => <ArrowDropDown style={{ color: '#65906B', marginRight: '10px' }} />}
            >
                {restorations.map((item, index) => (
                    <MenuItem key={index} value={index}>
                        {item}
                    </MenuItem>
                ))}
            </SelectStyle>
        </FormControl>
    );
}

const SelectDeliveryVariant = () => {

    const deliveryType = useFormData(state => state.dates.deliveryType)
    const setValue = useFormData(state => state.setValue)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue('deliveryType', deliveryVariants[newValue]);
    };

    return (
        <Box display={'flex'} flexDirection={'column'} maxWidth={'fit-content'}>
            <TabsContainer handleChange={handleChange} value={deliveryVariants.indexOf(deliveryType)}/>

            {deliveryVariants.indexOf(deliveryType) ? (<SelectRestaurants />) : (<OrderInputsContainer/>)}

        </Box>
    );
};






export default SelectDeliveryVariant;