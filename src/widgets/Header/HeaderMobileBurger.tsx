import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {styled} from "@/shared/globalStyles";
import React, {useState} from "react";
import {TopMenuDrawer} from "@/widgets/Header/HeaderBurgerDraw";

const HeaderMobileBurger = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    };

    return (
        <MobileMenu style={{ display: 'none' }} >
            <MenuOutlinedIcon fontSize='large' onClick={toggleDrawer} className='burger__icon'/>
            <span>МЕНЮ</span>
            <TopMenuDrawer open={open} toggleDrawer={toggleDrawer} setOpen={setOpen}/>
        </MobileMenu>
    );
};


const MobileMenu = styled('div', {
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