'use client'

import {Box} from "@mui/material";
import React, {useState} from "react";
import {styled} from "@/shared/globalStyles";
import {useFormData} from "@/stores/formStore";


const Button = styled('button', {
    display: 'flex',
    fontSize: '20px',
    height: '100%'
})

const PersonCount = () => {

    const numberPerson = useFormData(state => state.dates.numberPerson)
    const setValue = useFormData(state => state.setValue)

    const addCountHandler = () => {

        if (numberPerson != 5) {
            setValue('numberPerson', numberPerson + 1)
        } else setValue('numberPerson', 5)

    }

    const incrementCountHandler = () => {

        if (numberPerson != 1) {
            setValue('numberPerson', numberPerson - 1)
        } else setValue('numberPerson', 1)

    }

    return (
        <Box display={'flex'} padding={2} border={'1px solid rgba(255, 255, 255, .1)'} width={'fit-content'} borderRadius={'10px'} gap={1.5} alignItems={'center'}>

            <p>Кол-во персон</p>

            <Box style={{ userSelect: 'none' }} display={'flex'} alignItems={'center'} fontSize={'18px'} gap={1.8}>
                <Button onClick={incrementCountHandler} ><div style={{ height: '2px', backgroundColor: 'white', margin: 'auto 0', width: '10px'  }}></div></Button>
                <span>{numberPerson}</span>
                <Button onClick={addCountHandler}>+</Button>
            </Box>

        </Box>
    );
};

export { PersonCount }