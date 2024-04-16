'use client'

import React, {FC, useEffect, useState} from 'react';
import {Box, Drawer, IconButton} from '@mui/material';
import {styled} from "@/shared/globalStyles";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from "next/link";

interface TopMenuDrawerProps {
    open: boolean,
    toggleDrawer: any,
    setOpen: any
}


const TopMenuDrawer: FC<TopMenuDrawerProps> = ({ open, toggleDrawer, setOpen }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 720) {
            setOpen(false);
        }
    }, [windowWidth, setOpen]);

    return (
        <>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer}
            >
                <MenuDrawer>

                    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '25px', width: 'fit-content', margin: 'auto' }}>
                        <LinkStyle href={"/#cold"} onClick={toggleDrawer}>Меню</LinkStyle>
                        <LinkStyle href={"/aboutRestoration"} onClick={toggleDrawer}>О ресторане</LinkStyle>
                        <LinkStyle href={'/delivery'} onClick={toggleDrawer}>Условия доставки</LinkStyle>
                        <LinkStyle href={"/returnArticle"} onClick={toggleDrawer}>Возврат товара</LinkStyle>
                        <LinkStyle href={'/actions'} onClick={toggleDrawer}>Акции</LinkStyle>

                        <button>
                            <KeyboardBackspaceIcon onClick={toggleDrawer}/>
                        </button>
                    </Box>


                </MenuDrawer>
            </Drawer>
        </>
    );
};


const MenuDrawer = styled(Box, {
    width: '100%',
    height: '100vh',
    color: '#CFCFCF',
    display: 'flex',


    backgroundColor: "#494544"
})

const LinkStyle = styled(Link, {

})


export {TopMenuDrawer};
