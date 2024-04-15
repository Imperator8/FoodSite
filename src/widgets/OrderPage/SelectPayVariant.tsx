'use client'

import {Box} from "@mui/material";
import * as React from "react";
import {TabsStyle} from "./SelectDeliveryVariant";
import Tab from "@mui/material/Tab";
import {payVariants, useFormData} from "@/stores/formStore";


const SelectPayVariant = () => {

    const paysType = useFormData(state => state.dates.payTypes)
    const setValue = useFormData(state => state.setValue)

    const handleChangePays = (value: React.SyntheticEvent, newValue: number) => {
        setValue('payTypes', payVariants[newValue]);
    };

    return (
        <Box>
            <TabsStyle value={payVariants.indexOf(paysType)} onChange={handleChangePays} scrollButtons variant="scrollable" TabIndicatorProps={{ style: {
                    display: 'none'
                }}}>
                {payVariants.map(item => (
                    <Tab key={item} label={item} />
                ))}
            </TabsStyle>
        </Box>
    );
};

export default SelectPayVariant;