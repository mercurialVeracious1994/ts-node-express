import {isDecimalOptional, isDecimalRequired, isStringOptional, isStringRequired} from "./common";

export const productCreateValidation = [
    isStringRequired('name'),
    isDecimalRequired('price')
];

export const productUpdateValidation = [
    isStringOptional('name'),
    isDecimalOptional('price')
]

