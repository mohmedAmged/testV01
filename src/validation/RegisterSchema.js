import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    "first_name": yup
    .string(),
    "last_name": yup
    .string(),
    "address": yup
    .string(),
    "zip_code": yup 
    .string(),
    "email": yup
    .string(),
    "password": yup
    .string(),
    "country_id": yup.string(),
    "city_id": yup.string(),
    "state": yup.string(),
    "image": yup.string(),
});