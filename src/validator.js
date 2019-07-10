import * as yup from 'yup';

export default (inputs) => {

    let schema = yup.object().shape({
        id: yup.string().required(),
        firstName: yup.string()
            .required(),
        lastName: yup.string()
            .required(),
        phoneNo: yup.string()
            .min(11)
            .required(),
        email: yup.string()
            .email()
            .required()
    })


    return schema.isValid(inputs)

}



