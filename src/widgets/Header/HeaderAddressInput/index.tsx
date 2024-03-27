'use client'

import {Autocomplete} from "@mui/joy";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";


const addressList = [
    { label: "Москва, Часовая улица, 11/3с1", id: 1 },
    { label: "Москва, Часовая улица, 11/3", id: 2 },
]



let Index: React.FC = () => {

    return (
        <AutocompleteStyle
            className={`header__autocomplete autocomplete`}
            startDecorator={<LocationOnOutlinedIcon className="startDecorator"/>}
            placeholder="Введите адресс доставки"
            options={addressList}
            forcePopupIcon={false}
            endDecorator={<SearchIcon className={'endDecorator'}/>}
        />
    );
};



const AutocompleteStyle = styled(Autocomplete, {
    maxWidth: '400px',
    minWidth: '290px',
    width: '100%',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: adaptiveValue(18, 14),
    lineHeight: '21px',
    color: '$whiteText',
    backgroundColor: '$extraGreyText',
    border: 'none',
    padding: '15px 17px',
    borderRadius: '20px',
    marginLeft: adaptiveValue(70, 10),

    '.MuiAutocomplete-clearIndicator': {
        display: 'none',
    },

    '@mobile': {
        order: 1,
        maxWidth: '100%',
        marginLeft: 0,
    }
})

export default Index
