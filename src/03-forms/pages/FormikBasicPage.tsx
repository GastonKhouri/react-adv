import { useFormik, FormikErrors } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if ( !firstName ) {
            errors.firstName = 'Obligatorio';
        } else if ( firstName.length >= 15 ) {
            errors.firstName = 'Debe de ser de 15 caracteres o menos';
        }

        if ( !lastName ) {
            errors.lastName = 'Obligatorio';
        } else if ( lastName.length >= 10 ) {
            errors.lastName = 'Debe de ser de 10 caracteres o menos';
        }

        if ( !email ) {
            errors.email = 'Obligatorio';
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email ) ) {
            errors.email = 'Email invalido';
        }

        return errors;

    };

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik( {
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validate
    } );

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form
                noValidate
                onSubmit={ handleSubmit }
            >

                <label>First Name</label>
                <input
                    autoComplete="off"
                    type="text"
                    name="firstName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label>Last Name</label>
                <input
                    autoComplete="off"
                    type="text"
                    name="lastName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label>Email</label>
                <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default FormikBasicPage;
