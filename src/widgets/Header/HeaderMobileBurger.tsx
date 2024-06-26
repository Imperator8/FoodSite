'use client'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {styled} from "@/shared/globalStyles";
import React, {FC, useState} from "react";
import {TopMenuDrawer} from "@/widgets/Header/HeaderBurgerDraw";
import { NoSsr } from '@mui/material';

let HeaderMobileBurger: FC = ({...props}) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    };

    return (
        <div style={{ display: 'none' }} onClick={toggleDrawer} {...props}>
            <NoSsr>
                <MenuOutlinedIcon style={{color: '#5b8361' }} fontSize='large' className='burger__icon'/>
            </NoSsr>

            <span>МЕНЮ</span>
            <TopMenuDrawer open={open} toggleDrawer={toggleDrawer} setOpen={setOpen}/>
        </div>
    );
};


HeaderMobileBurger = styled(HeaderMobileBurger, {
    flexDirection: 'column',
    color: '$whiteText',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '14px',

    '& .burger__icon': {
        color: '$greenLight',
    },

    '@mobile': {
        display: 'flex !important',
    },
})


export {HeaderMobileBurger}