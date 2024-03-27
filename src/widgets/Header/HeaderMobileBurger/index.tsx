import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {styled} from "@/shared/globalStyles";

const Index = () => {
    return (
        <MobileMenu>
            <MenuOutlinedIcon fontSize='large' className='burger__icon'/>
            <span>МЕНЮ</span>
        </MobileMenu>
    );
};


const MobileMenu = styled('div', {
    display: 'none',
    flexDirection: 'column',
    color: '$whiteText',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '14px',

    '& .burger__icon': {
        color: '$greenLight',
    },

    '@mobile': {
        display: 'flex',
    },
})


export default Index;