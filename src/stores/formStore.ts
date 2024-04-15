import {devtools, persist} from "zustand/middleware";
import {create} from "zustand";
import {useBasket} from "@/stores/basket";
import {DatesForm} from "@/stores/models";
import axios from "axios";


export const restorations = [
    "Ресторан 1",
    "Ресторан 2",
    "Ресторан 3",
]

export const deliveryVariants = [
    "Доставка",
    "Самовывоз"
]

export const payVariants = [
    "Оплата онлайн",
    "Картой курьеру",
    "Наличными"
]

export const howDeliveryVariants = [
    "В ближайшее время",
    "Ко времени"
]

export const callVariants = [
    "Не перезванивать",
    "Потребуется звонок оператора"
]

export interface FormData {
    dates: DatesForm,
    setValue: (key: string, value: any) => void,
    reset: () => void,
    submit: () => void
}

export const nullData = {
    name: '',
    phone: '',

    deliveryType: deliveryVariants[0],
    street: '',
    numberBuild: '',
    numberApartment: '',
    entrance: '',
    floor: 1,
    comment: '',
    restaurant: restorations[0],

    payTypes: payVariants[0],

    howDelivery: howDeliveryVariants[0],
    whatDelivery: '',
    numberPerson: 1,
    call: callVariants[0],

    agree: false,

    errors: [],
    sendData: false
}



export const useFormData = create<FormData>()(
    devtools(
        persist(
            (set) => ({
                dates: nullData,
                setValue: (key, value) => set((state) => {

                    const updateDates = state.dates

                    if (key in updateDates) {
                        // @ts-ignore
                        updateDates[key] = value
                    }

                    return ({
                        dates: {...updateDates}
                    })

                }),
                reset: () => set(() => {
                    return ({
                        dates: nullData
                    })
                }),
                submit: () => set((state) => {

                    const errors = []

                    const dates = state.dates

                    if (!dates.name) {
                        errors.push("name")
                    }

                    if (!dates.phone) {
                        errors.push("phone")
                    }

                    if (!dates.street) {
                        errors.push("street")
                    }

                    if (!dates.numberBuild) {
                        errors.push("numberBuild")
                    }

                    if (howDeliveryVariants.indexOf(dates.howDelivery) == howDeliveryVariants.length - 1) {
                        if (!dates.whatDelivery) {
                            errors.push("howDelivery")
                        }
                    }

                    if (!dates.agree) {
                        errors.push("agree")
                    }

                    if (errors.length == 0) {
                        if (Object.keys(useBasket.getState().articles).length == 0) {
                            alert("Вы не выбрали ни одного товара")
                            return ({})
                        }

                        dates.sendData = true
                    }

                    return ({
                        dates: {...dates, errors: errors}
                    })

                }),
            }),
            {
                name: 'formStore',
            },
        ),
    ),
)