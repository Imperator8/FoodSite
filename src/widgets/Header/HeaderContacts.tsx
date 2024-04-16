'use client'

import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";
import React from "react";

let HeaderContacts: React.FC = () => (
    <Content>

        <div className="wrapper_icon">
            <PhoneInTalkOutlinedIcon className='icon' fontSize={'small'}/>
        </div>

        <div className="contact_wrapper">
            <div className="title">Контакты:</div>
            <div className="phone">+7 (917) 510-57-59</div>
        </div>

    </Content>
)

const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '52px',
    marginLeft: '30px',
    marginRight: '10px',

    '@mobile': {
        marginLeft: '20px',
        display: 'none'
    },

    '& .wrapper_icon': {
        minHeight: '32px',
        minWidth: '32px',
        backgroundColor: '$greenLight',
        borderRadius: '30px',
        display: 'flex',
        marginRight: '10px',
    },

    '& .icon': {
        color: '$whiteText',
        margin: 'auto',
    },

    '& .title': {
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '20px',
        color: '$greyText',
    },

    '& .phone': {
        color: '$whiteText',
        fontWeight: '700',
        fontSize: adaptiveValue(18, 4)
    },
})

export {HeaderContacts}