import {isDecimalOptional, isDecimalRequired, isStringOptional, isStringRequired} from "./common";

export const productCreateValidation = [
    // isAlphanumericRequired('productId'),
    isStringRequired('name'),
    isDecimalRequired('price')
];

export const productUpdateValidation = [
    // isAlphanumericOptional('productId'),
    isStringOptional('name'),
    isDecimalOptional('price')
]
