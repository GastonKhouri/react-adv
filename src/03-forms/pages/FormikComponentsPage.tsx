import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {

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
                        <Form>

                            <label>First Name</label>
                            <Field autoComplete="off" name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label>Last Name</label>
                            <Field autoComplete="off" name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label>Email</label>
                            <Field autoComplete="off" name="email" type="text" />
                            <ErrorMessage name="email" component="span" />

                            <label>Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <br />

                            <label>
                                <Field autoComplete="off" name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};

export default FormikComponentsPage;
