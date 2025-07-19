import React from "react";
import {
    login,
    getAllUsers,
    getAllPagedUsers,
    getUserByID,
    createUser,
    updateUserByID,
    deleteUserByID,
} from "../../services/axiosCRUDService";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AxiosCRUDExample = () => {
    const initialCredentials = {
        email: "",
        password: "",
    };

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email("InvalidEmail format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const autUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem("token", response.data.token);
                } else {
                    sessionStorage.removeItem("token");
                    throw new Error("Login Failure");
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem("token");
            })
            .finally(() => console.log("Login done"));
    };

    //CRUD EXAMPLES
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error(`No Users Found `);
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error(`No Users Found in page ${page}`);
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error("User not found");
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error("User not create");
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error("User not found and no update");
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(`User with ID: ${id} delete successfully`);
                } else {
                    throw new Error("User not found and no delete");
                }
            })
            .catch((error) => alert(`Something was wrong: ${error}`));
    };

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
                    autUser(values);
                }}
            >
                {/* Props de Formik */}
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                        />

                        {/* Error del Email */}
                        {errors.email && touched.email && (
                            <ErrorMessage name="email" component="div" />
                        )}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        {/* Errores del Password */}
                        {errors.password && touched.password && (
                            <ErrorMessage name="password" component="div" />
                        )}
                        <button type="submit">Login</button>
                        {isSubmitting ? <p>Login Your Credentials...</p> : null}
                    </Form>
                )}
            </Formik>

            {/* Example CRUDS */}
            <div>
                <button onClick={obtainAllUsers}>Get All Users</button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get All (Page 1) Users AXIOS
                </button>
                <button onClick={() => obtainUserByID(1)}>Get User 1</button>
                <button onClick={() => createNewUser("morpheus", "leader")}>
                    Create User
                </button>
                <button onClick={() => updateUser(1, "morpheus", "developer")}>
                    Update User by ID
                </button>
                <button onClick={() => deleteUser(1)}>Delete User</button>
            </div>
        </div>
    );
};

export default AxiosCRUDExample;
