import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik( {
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object( {
            firstName: Yup.string().max( 15, 'Debe tener 15 caracteres o menos' ).required( 'Obligatorio' ),
            lastName: Yup.string().max( 10, 'Debe tener 10 caracteres o menos' ).required( 'Obligatorio' ),
            email: Yup.string().email( 'Debe ser un email valido' ).required( 'Obligatorio' )
        } )
    } );

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form
                noValidate
                onSubmit={ handleSubmit }
            >

                <label>First Name</label>
                <input
                    autoComplete="off"
                    type="text"
                    { ...getFieldProps( 'firtsName' ) }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label>Last Name</label>
                <input
                    autoComplete="off"
                    type="text"
                    { ...getFieldProps( 'lastName' ) }

                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label>Email</label>
                <input
                    autoComplete="off"
                    type="email"
                    { ...getFieldProps( 'email' ) }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default FormikYupPage;
