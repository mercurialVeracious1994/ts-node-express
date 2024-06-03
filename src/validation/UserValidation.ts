import {isArrayOptional, isArrayRequired, isStringOptional, isStringRequired} from "./common";

export const userCreateValidation = [
    isStringRequired('name'),
    isArrayRequired('postId')
]

export const userUpdateValidation = [
    isStringOptional('name'),
    isArrayOptional('postId')
]
