import {isDecimalOptional, isDecimalRequired, isStringOptional, isStringRequired} from "./common";

export const productCreateValidation = [
    isStringRequired('productId'),
    isStringRequired('name'),
    isDecimalRequired('price')
];

export const productUpdateValidation = [
    isStringOptional('productId'),
    isStringOptional('name'),
    isDecimalOptional('price')
]
