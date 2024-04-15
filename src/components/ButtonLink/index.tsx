import React, {FC} from 'react';
import {styled} from "@/shared/globalStyles";
import Link from "next/link";

interface ButtonLinkStyle {
    children?: React.ReactNode,
    href: string
}

let ButtonLink: FC<ButtonLinkStyle> = ({children, href, ...props}) => {
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

ButtonLink = styled(ButtonLink, {
    backgroundColor: '$greenLight',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    maxWidth: '200px',
    width: '100%',

    '&:hover': {
        backgroundColor: '$greenLightHover',
    },
})

export {ButtonLink};