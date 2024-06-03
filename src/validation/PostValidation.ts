import {
    isAlphanumericOptional,
    isAlphanumericRequired,
    isBooleanOptional,
    isBooleanRequired,
    isStringOptional,
    isStringRequired
} from "./common";

export const postCreateValidation = [
    isStringRequired('title'),
    isStringRequired('content'),
    isBooleanRequired('isPublished'),
    isAlphanumericRequired('authorId')
]

export const postUpdateValidation = [
    isStringOptional('title'),
    isStringOptional('content'),
    isBooleanOptional('isPublished'),
    isAlphanumericOptional('authorId')
]
