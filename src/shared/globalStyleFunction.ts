import {
    minWidth,
    maxWidth,
    containerWidth,
    maxContainerWidth
} from "./globalStyles";


export function percent(px: number, from: number): string {
    return `${(px / from) * 100}%`;
}

export function rem(px: number): string {
    return `${px / 16}rem`;
}

export function em(px: number, current: number = 16): string {
    return `${px / current}em`;
}






export function adaptiveValue(
    startSize: number,
    minSize: number,
    widthFrom: number = containerWidth,
    widthTo: number = minWidth
): string {
    if (startSize === 0) {
        startSize = 0.000001;
    }
    if (minSize === 0) {
        minSize = 0.000001;
    }

    if (widthFrom === containerWidth && maxContainerWidth === 0) {
        widthFrom = maxWidth;
    }

    // Формула плавающего значения
    const slope: number = (startSize - minSize) / (widthFrom - widthTo);
    let yIntersection: number = -widthTo * slope + minSize;
    if (yIntersection === 0) {
        yIntersection = 0.000001;
    }
    const flyValue: string = `${rem(yIntersection)} + ${slope * 100}vw`;

    // Получение значения свойства
    let propertyValue: string = `clamp(${rem(minSize)}, ${flyValue}, ${rem(startSize)})`;
    // Если отрицательные значения
    if (minSize > startSize) {
        propertyValue = `clamp(${rem(startSize)}, ${flyValue}, ${rem(minSize)})`;
    }

    return propertyValue;
}







