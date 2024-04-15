import Radio from '@mui/material/Radio';
import {RadioGroup as RadioGroupButtons} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {callVariants, useFormData} from "@/stores/formStore";
import React from "react";

const RadioGroup = () => {

    const dates = useFormData(state => state.dates)
    const setValue = useFormData(state => state.setValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("call", event.target.value);
    };

    return (
        <FormControl sx={{ width: 'fit-content' }}>
            <FormLabel style={{ color: 'white' }} id="demo-radio-buttons-group-label">Хотите мы позвоним?</FormLabel>
            <RadioGroupButtons
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={dates.call}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                {callVariants.map(item => (
                    <FormControlLabel key={item} value={item} control={<Radio sx={{ color: '#72A479 !important' }}/>} label={item} />
                ))}
            </RadioGroupButtons>
        </FormControl>
    );
}

export { RadioGroup }