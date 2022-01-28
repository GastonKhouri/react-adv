import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import {
    RegisterPage,
    FormikBasicPage,
    FormikYupPage,
    FormikComponentsPage,
    FormikAbstractionPage,
    RegisterFormikPage,
    DynamicFormPage
} from '../03-forms/pages/';

import logo from '../logo.svg';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">

                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to='/register' className={ ( { isActive } ) => isActive ? 'nav-active' : '' } >
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstraction' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Abstraction
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-register' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-dynamic' className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Dynamic
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={ <RegisterPage /> } />
                    <Route path="formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikYupPage /> } />
                    <Route path="/formik-components" element={ <FormikComponentsPage /> } />
                    <Route path="/formik-abstraction" element={ <FormikAbstractionPage /> } />
                    <Route path="/formik-register" element={ <RegisterFormikPage /> } />
                    <Route path="/formik-dynamic" element={ <DynamicFormPage /> } />

                    <Route path="/*" element={ <Navigate to="/register" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    );
};

export default Navigation;
