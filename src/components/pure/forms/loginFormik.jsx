import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('InvalidEmail format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h4>Formato de Registro</h4>
            <Formik
                //Valores iniciales
                initialValues={initialCredentials}
                //Validacion de YUP
                validationSchema={loginSchema}
                //On submit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    /* Para guardar los datos en el local Storage */
                    await localStorage.setItem('credentials', values);
                    <Navigate to='/profile' /> 
                }}
            >

                {/* Props de Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Error del Email */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div' />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        {/* Errores del Password */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div' />
                            )
                        }

                        <button type="submit">Login</button>

                        {isSubmitting ? (<p>Login Your Credentials...</p>) : null}



                    </Form>

                )
                }




            </Formik>

        </div>

    );
}

export default LoginFormik;
