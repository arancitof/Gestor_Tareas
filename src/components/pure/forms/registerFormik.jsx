import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { User } from "../../../models/user.class";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "", //Para confirmar contraseña
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, "El nombre de usuario es demasiado corto")
            .max(12, "El nombre de usuario es demasiado largo")
            .required("El nombre de usuario es requerido"),
        email: Yup.string()
            .email("InvalidEmail format")
            .required("Email is required"),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], 'Debes ser un usuario Admin')
            .required('El rol es requerido'),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Contraseña demasiado corta"),
        confirm: Yup.string()
            .when("password", {
                is: (value) => (value && value.length > 0 ? true : false),
                then: () => 
                    Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Las contraseñas nos coinciden!"
                ),
            })
            .required("Por favor confirma tu contraseña"),
    });

    const submit = (values) => {
        console.log("Register User");
    };

    return (
        <div>
            <h4>Formato de Registro</h4>
            <Formik
                initialValues={initialValues}
                //Validacion de YUP
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Nombre de usuario</label>
                        <Field id="username" type="text" name="username" placeholder="Juan Perez" />

                        {/* Error del usuario */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component='div' />
                            )
                        }

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

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar Contraseña"
                            type="password"
                        />

                        {/* Errores del confirm */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div' />
                            )
                        }

                        <button type="submit">Registrar Usuario</button>
                        {isSubmitting ? (<p>Enviando tus credenciales...</p>) : null}


                    </Form>
                )
                }

            </Formik>
        </div>
    );
};

export default RegisterFormik;
