'use client'

import React from 'react';
import {Container, TitleShowCase} from "@/shared/globalComponents";
import { ConfirmOrder } from './ConfirmOrder';
import SmallTextBack from '@/components/SmallTextBack';
import {Box} from "@mui/material";
import { FormContentBox, FormContentBoxInput, FormContentBoxTitle } from './FormContentBox';
import SelectDeliveryVariant from './SelectDeliveryVariant';
import SelectPayVariant from './SelectPayVariant';
import { WhatDeliveryVariant } from './WhatDeliveryVariant';
import {nullData, useFormData} from "@/stores/formStore";
import {useRouter} from "next/navigation";

const Index = () => {


    const dates = useFormData(state => state.dates)
    const setValue = useFormData(state => state.setValue)

    const inputNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('name', event.target.value)
    }

    const inputPhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('phone', event.target.value)
    }

    return (
        <>
            <Container css={{ marginTop: 50, marginBottom: 100, maxWidth: 800 }}>

                <SmallTextBack href={"/basket"}>в корзину</SmallTextBack>

                <TitleShowCase css={{ margin: "50px 0" }}>Оформление заказа</TitleShowCase>

                <form autoComplete='off' style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                    <FormContentBox>
                        <FormContentBoxTitle>1. Контактная информация</FormContentBoxTitle>

                        <Box gap={'15px'} display={'flex'} marginTop={'30px'}>
                            <FormContentBoxInput
                                css={{
                                    borderColor: dates.errors.includes('name') ? 'red !important' : 'rgba(255, 255, 255, .1)',
                                }}
                                onChange={inputNameHandler}
                                placeholder="Имя*"
                                value={dates.name}
                            />
                            <FormContentBoxInput
                                onChange={inputPhoneHandler}
                                css={{
                                    borderColor: dates.errors.includes('phone') ? 'red !important' : 'rgba(255, 255, 255, .1)',
                                }}
                                placeholder="Телефон*"
                                value={dates.phone}
                            />
                        </Box>

                    </FormContentBox>

                    <FormContentBox>
                        <FormContentBoxTitle>2. Доставка</FormContentBoxTitle>

                        <SelectDeliveryVariant />

                    </FormContentBox>

                    <FormContentBox>
                        <FormContentBoxTitle>3. Оплатить</FormContentBoxTitle>

                        <SelectPayVariant/>

                    </FormContentBox>

                    <FormContentBox css={{ paddingBottom: '10px' }}>
                        <FormContentBoxTitle>4. Когда доставить</FormContentBoxTitle>

                        <WhatDeliveryVariant/>
                    </FormContentBox>

                    <FormContentBox>

                        <ConfirmOrder/>

                    </FormContentBox>

                </form>

            </Container>
        </>
    );
};

export default Index;