'use client'

import * as React from "react";
import {TabsStyle} from "./SelectDeliveryVariant";
import Tab from "@mui/material/Tab";
import {FormContentBoxInput} from "@/widgets/OrderPage/FormContentBox";
import {howDeliveryVariants, payVariants, useFormData} from "@/stores/formStore";


const Select = () => {

    const dates = useFormData(state => state.dates)
    const setValue = useFormData(state => state.setValue)

    const handleChangeHowDelivery = (value: React.SyntheticEvent, newValue: number) => {
        setValue('howDelivery', howDeliveryVariants[newValue]);
    };

    const inputWhatDeliveryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('whatDelivery', event.target.value)
    }

    return (
        <>
            <TabsStyle css={{ marginBottom: '0' }} value={howDeliveryVariants.indexOf(dates.howDelivery)} onChange={handleChangeHowDelivery} scrollButtons variant="scrollable" TabIndicatorProps={{ style: {
                    display: 'none'
                }}}>
                {howDeliveryVariants.map(item => (
                    <Tab key={item} label={item} />
                ))}
            </TabsStyle>

            {howDeliveryVariants.indexOf(dates.howDelivery) == howDeliveryVariants.length - 1 ? <FormContentBoxInput
                css={{
                    maxWidth: 300,
                    borderColor: dates.errors.includes('howDelivery') ? 'red !important' : 'rgba(255, 255, 255, .1)'}}
                id="input-time"
                value={dates.whatDelivery}
                onChange={inputWhatDeliveryHandler}
                placeholder="Укажите время*"
            /> : null}
        </>
    );
};

export { Select }