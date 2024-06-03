import {check, ValidationChain, validationResult} from "express-validator"
import {Request, Response} from "express";

export const isDecimalRequired = (field: string): ValidationChain => {
    return check(field)
        .exists()
        .withMessage({error: `${field} is missing`, detail: `${field} is required`})
        .isDecimal()
        .withMessage({error: `${field} is not decimal `, detail: `provide a decimal value `})
        .bail();
}


export const isDecimalOptional = (field: string): ValidationChain => {
    return check(field)
        .optional()
        .isDecimal()
        .withMessage({error: `${field} is not decimal `, detail: `provide a decimal value `})
        .bail();
}

export const isStringRequired = (field: string): ValidationChain => {
    return check(field)
        .exists()
        .withMessage({error: `${field} is missing`, detail: `${field} is required`})
        .isString()
        .withMessage({error: 'not a string', detail: 'provide a string value'})
        .bail()
        .matches(/^[a-zA-Z\s]+$/).withMessage({
            error: `${field} should have alphabets only`,
            details: `provide only alphabets and spaces`
        })
        .bail();
}

export const isArrayOptional = (field: string): ValidationChain => {
    return check(field)
        .optional()
        .isArray()
        .withMessage({error: 'not a an array', detail: 'provide a array value'})
        .bail()
}
export const isArrayRequired = (field: string): ValidationChain => {
    return check(field)
        .exists()
        .isArray()
        .withMessage({error: 'not a an array', detail: 'provide a array value'})
        .bail()
}

export const isStringOptional = (field: string): ValidationChain => {
    return check(field)
        .optional()
        .isString()
        .withMessage({error: 'not a string', detail: 'provide a string value'})
        .bail()
        .matches(/^[a-zA-Z\s]+$/).withMessage({
            error: `${field} should have alphabets only`,
            details: `provide only alphabets and spaces`
        })
        .bail()
}

export const isBooleanOptional = (field: string): ValidationChain => {
    return check(field)
        .optional()
        .isBoolean()
        .withMessage({error: 'not a boolean', detail: 'provide a boolean value'})
        .bail()
}


export const isAlphanumericOptional = (field: string): ValidationChain => {
    return check(field)
        .optional()
        .isString()
        .withMessage({error: 'not a string', detail: 'provide a string value'})
        .bail()
}

export const isAlphanumericRequired = (field: string): ValidationChain => {
    return check(field)
        .exists()
        .withMessage({error: `${field} is missing`, detail: `${field} is required`})
        .isString()
        .withMessage({error: 'not a string', detail: 'provide a string value'})
        .bail()
}
export const isBooleanRequired = (field: string): ValidationChain => {
    return check(field)
        .exists()
        .withMessage({error: `${field} is missing`, detail: `${field} is required`})
        .isBoolean()
        .withMessage({error: 'not a boolean', detail: 'provide a boolean value'})
        .bail()
}


export const validate = (req: Request, res: Response, next: Function) => {

    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const validationError = errors.mapped();
    const validationErrors = Object.keys(validationError).map(key => ({[`${key}`]: validationError[`${key}`].msg}));
    return res.status(422).json(validationErrors)
}