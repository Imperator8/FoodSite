import React from 'react';
import {styled} from "@/shared/globalStyles";
import {adaptiveValue} from "@/shared/globalStyleFunction";

const Index = ({children}: {children: React.ReactNode}) => {
    return (
        <TextStyle>
            {children}
        </TextStyle>
    );
};

const TextStyle = styled('h1', {
    fontSize: adaptiveValue(40, 30),
    textAlign: 'center'
})

export default Index;