import {ReactNode} from "react";
import {styled} from "@/shared/globalStyles";
import Link from "next/link";
import Image from "next/image";

const Index = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <LinkStyle href={href}>
            <Image width={16} height={16} src="/icons/backArrow.svg" alt="<-"/>
            <span>{children}</span>
        </LinkStyle>
    );
};


const LinkStyle = styled(Link, {
    display: "flex",
    textDecoration: "none",
    gap: "5px",
    width: "fit-content",
    fontSize: '1rem',
})


export default Index;













