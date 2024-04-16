'use client'

import React, {useState} from 'react';
import * as S from './styles';
import Logo from "../../entities/Logo";
import {HeaderMobileBurger} from "@/widgets/Header/HeaderMobileBurger";
import {HeaderAddressInput} from "@/widgets/Header/HeaderAddressInput";
import {HeaderContacts} from "@/widgets/Header/HeaderContacts";
import {HeaderBasket} from "@/widgets/Header/HeaderBasket";
import {NoSsr} from "@mui/base";

const Index = () => {

    return (
            <S.Header>

                <S.Container>


                    <S.MobileWrapper>
                        <NoSsr>
                            <HeaderMobileBurger/>

                            <Logo/>


                            <HeaderAddressInput/>

                            <HeaderContacts/>

                            <HeaderBasket/>
                        </NoSsr>

                    </S.MobileWrapper>


                </S.Container>

            </S.Header>

    );
};

export default Index;