import * as yup from "yup"

export const validation = yup.object({
    title: yup.string().required("This field is required."),
    description: yup.string().required("This field is required.")
})