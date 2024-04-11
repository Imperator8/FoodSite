"use client"

import React, {FC} from 'react';
import {useBasket} from "@/stores/basket";
import {styled} from "@/shared/globalStyles";

let ShowCaseCardCircleItem: FC<{id: string | number}> = ({ id, ...props }) => {

    const articles = useBasket(state => state.articles)

    const count = id in articles ? articles[id].count : 0

    return (
        <div className='ShowCaseCard__Circle' style={{ display: count ? 'flex' : 'none' }} {...props}>
            {count}
        </div>
    );
};

ShowCaseCardCircleItem = styled(ShowCaseCardCircleItem, {
    backgroundColor: '$greenLightBackground',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    justifyContent: 'center',
    alignItems: 'center'
})

export default ShowCaseCardCircleItem