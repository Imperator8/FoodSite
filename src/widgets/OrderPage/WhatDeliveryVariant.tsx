import {Select} from "./Select";
import {Box} from "@mui/material";
import {PersonCount} from "./PersonCount";
import {RadioGroup} from "./RadioGroup";


const WhatDeliveryVariant = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Select/>

            <PersonCount/>

            <RadioGroup/>

        </Box>
    );
};

export {WhatDeliveryVariant}