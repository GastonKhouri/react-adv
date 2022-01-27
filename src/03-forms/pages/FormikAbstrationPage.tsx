import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstractionPage = () => {

    return (
        <div>
            <h1>Formik Component Tutorial</h1>

            <Formik
                initialValues={ {
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                } }
                onSubmit={ ( values ) => {
                    console.log( values );
                } }
                validationSchema={ Yup.object( {
                    firstName: Yup.string().trim().max( 15, 'Debe tener 15 caracteres o menos' ).required( 'Obligatorio' ),
                    lastName: Yup.string().trim().max( 10, 'Debe tener 10 caracteres o menos' ).required( 'Obligatorio' ),
                    email: Yup.string().trim().email( 'Debe ser un email valido' ).required( 'Obligatorio' ),
                    jobType: Yup.string().notOneOf( [ 'it-junior' ], 'Esta opcion no es permitida' ).required( 'Obligatorio' ),
                    terms: Yup.boolean().isTrue( 'Debe aceptar los terminos y condiciones' )
                } ) }
            >

                {
                    formik => (
                        <Form noValidate>

                            <MyTextInput
                                autoComplete="off"
                                label="First Name"
                                name="firstName"
                            />

                            <MyTextInput
                                autoComplete="off"
                                label="Last Name"
                                name="lastName"
                            />

                            <MyTextInput
                                autoComplete="off"
                                label="Email"
                                name="email"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <br />

                            <MyCheckbox label="Terms and conditions" name="terms" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};

export default FormikAbstractionPage;
