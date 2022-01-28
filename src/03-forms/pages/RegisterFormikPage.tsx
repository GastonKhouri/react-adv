import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import MyTextInput from '../components/MyTextInput';

import '../styles/styles.css';

const schema = Yup.object( {
    name: Yup.string().min( 2, 'Minimo 2 caracteres' ).max( 15, 'Maximo 15 caracteres' ).required( 'Este campo es obligatorio' ),
    email: Yup.string().email( 'Email no es válido' ).required( 'Este campo es obligatorio' ),
    password1: Yup.string().min( 6, 'La contraseña debe tener al menos 6 caracteres' ).required( 'Este campo es obligatorio' ),
    password2: Yup.string().oneOf( [ Yup.ref( "password1" ), null ], 'Las contraseñas deben de ser iguales' ).required( 'Este campo es obligatorio' )
} );

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={ {
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                } }
                onSubmit={ values => {
                    console.log( values );
                } }
                validationSchema={ schema }
            >

                {
                    ( { handleReset } ) => (
                        <Form>

                            <MyTextInput autoComplete="off" label="Name" name="name" type="text" placeholder="Name" />
                            <MyTextInput autoComplete="off" label="Email" name="email" type="email" placeholder="Email" />
                            <MyTextInput label="Password" name="password1" type="password" placeholder="Password" />
                            <MyTextInput label="Confirm Password" name="password2" type="password" placeholder="Repeat Password" />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset Form</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};

export default RegisterFormikPage;
