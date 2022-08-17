import * as yup from "yup";
import "yup-phone";

export const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().phone("RU , MN", true, 'Phone format +7/+976 and 10/8 digits after').required(),
    password: yup.string().min(4).required(),
}).required();