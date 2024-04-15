import {Box, Button, Checkbox, Typography} from "@mui/material";
import {styled} from "@/shared/globalStyles";
import {nullData, useFormData} from "@/stores/formStore";
import React, {useEffect, useState} from "react";
import {useBasket} from "@/stores/basket";
import {useRouter} from "next/navigation";
import axios from "axios";


const ButtonStyle = styled(Button, {
    backgroundColor: 'rgba(97, 137, 103, 1) !important',
    textWrap: 'nowrap',
    height: '50px',
    color: '$whiteText !important',
    marginLeft: 'auto !important',
    padding: '0 20px !important',

    '&:hover': {
        backgroundColor: 'rgb(79,119,84) !important',
    }

})

const BoxContainer = styled(Box, {

    '@mobile': {
        flexDirection: 'column-reverse',
        gap: '10px',

        'button': {
            margin: '0 auto'
        },

        'p': {
            fontSize: '11px'
        },

        'div': {
            margin: '0 auto'
        }
    },

})



const ConfirmOrder = () => {
    const {push} = useRouter()

    const [click, setClick] = useState(false)

    const dates = useFormData(state => state.dates)
    const submit = useFormData(state => state.submit)
    const setValue = useFormData(state => state.setValue)
    const articles = useBasket(state => state.articles)

    const reset = useBasket(state => state.reset)
    const resetForm = useFormData(state => state.reset)

    useEffect(() => {

        if (dates.sendData && dates.errors.length == 0) {

            axios.post("/api/getDataForm", {
                data: dates,
                articles: articles
            }).then(res => {
                if (res.data == "FAIL") {
                    alert("Не возможно обработать ваш заказ, временные трудности в работе сервиса, пожалуйста попробуйте позже")
                } else {
                    push('/orderSuccess')
                    resetForm()
                    reset()
                }
            })
        } else {
            push('/orderPage')
        }

        setClick(false)
    }, [click]);

    const onSubmitHandler = () => {
        submit()
        setClick(true)
    }

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("agree", event.target.checked);
    };

    return (
        <BoxContainer display={'flex'} >

            <Box display={'flex'} alignItems={"center"}>
                <Checkbox sx={{ color: dates.errors.includes('agree') && !dates.agree ? 'red' : 'white !important' }} checked={dates.agree} onChange={handleChecked} />

                <Typography sx={{ color: 'white', fontSize: '13px'  }}>Я согласен на обработку моих перс. данных в соответствии с <a href='#' style={{ color: '#72A479', textDecoration: 'underline' }}>Условиями</a> </Typography>
            </Box>

            <ButtonStyle onClick={onSubmitHandler}>Оформить заказ</ButtonStyle>

        </BoxContainer>
    );
};

export { ConfirmOrder };