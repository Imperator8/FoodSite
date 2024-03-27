'use client'

import React, { useRef, useState } from 'react';
import {styled} from "@/shared/globalStyles";

export interface DrugProps {
    children: React.ReactNode; // Принимаем children как React.ReactNode
    className: string
}

let Index: React.FC<DrugProps> = ({ children , className, ...props}) => {
    const containerRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер
    const [isDragging, setIsDragging] = useState<boolean>(false); // Состояние для отслеживания перетаскивания
    const [startX, setStartX] = useState<number>(0); // Начальная позиция X мыши
    const [scrollLeft, setScrollLeft] = useState<number>(0); // Позиция прокрутки контейнера

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true); // Установка состояния перетаскивания
        setStartX(event.clientX); // Установка начальной позиции X мыши
        setScrollLeft(containerRef.current!.scrollLeft); // Сохранение текущей позиции прокрутки контейнера

        if (containerRef.current) {
            containerRef.current.style.userSelect = 'none'; // Установка плавной прокрутки
        }

    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDragging && containerRef.current) {
            const diffX = event.clientX - startX; // Вычисление разницы между начальной и текущей позициями X мыши
            containerRef.current.scrollLeft = scrollLeft - diffX; // Прокручиваем контейнер на соответствующую величину
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Сброс состояния перетаскивания
    };

    return (
        <div
            {...props}
            className={className}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {children}
        </div>
    );
};

Index = styled(Index, {
    "&:hover": {

    }
})

export default Index;

