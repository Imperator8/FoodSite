import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {styled} from "@/shared/globalStyles";

const Index = () => {
    return (
        <MobileMenu style={{ display: 'none' }}>
            <MenuOutlinedIcon fontSize='large' className='burger__icon'/>
            <span>МЕНЮ</span>
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


export default Index;