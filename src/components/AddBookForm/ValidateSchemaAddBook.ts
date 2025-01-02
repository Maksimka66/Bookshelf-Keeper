import * as yup from 'yup';

export const ValidateSchemaAddBook = yup.object().shape({
    title: yup
        .string()
        .trim()
        .max(250, 'Title must be at most 50 characters')
        .required('Field is required'),
    author: yup
        .string()
        .trim()
        .max(50, 'Author must be at most 50 characters')
        .required('Field is required'),
    publishYear: yup.number().required('Field is required'),
    pagesTotal: yup.number()
});
