import useForm from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm( {
        name: 'Gaston',
        email: 'gaston@gmail.com',
        password1: '123456',
        password2: '123456'
    } );

    const onSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

        e.preventDefault();

        console.log( { name, email, password1, password2 } );

    };

    return (
        <div>
            <h1>Register Page</h1>

            <form
                noValidate
                onSubmit={ onSubmit }
            >

                <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    onChange={ onChange }
                    value={ name }
                    className={ `${ name.trim().length <= 0 ? 'has-error' : '' }` }
                />

                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    onChange={ onChange }
                    value={ email }
                    className={ `${ !isValidEmail( email.trim() ) ? 'has-error' : '' }` }
                />

                { !isValidEmail( email.trim() ) && <span>Email no es válido</span> }

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password1"
                    onChange={ onChange }
                    value={ password1 }
                />

                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span> }

                <input
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="off"
                    name="password2"
                    onChange={ onChange }
                    value={ password2 }
                />

                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas deben de ser iguales</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset Form</button>

            </form>
        </div>
    );
};

export default RegisterPage;
