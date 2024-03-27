import {styled} from "@/shared/globalStyles";
import Link from "next/link";


const Index = () => {
    return (
        <Link href='/'>
            <Logo>
                Logos
            </Logo>
        </Link>
    );
};

const Logo = styled('div', {
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '25px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '$whiteText',
})

export default Index;