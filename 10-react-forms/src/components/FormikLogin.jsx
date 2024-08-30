import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import validateUser from "../helpers/validateUser";

export default function FormikLogin() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => {
        //* Petición al Back... axios/fetch
        alert(`username: ${values.username}, password: ${values.password}`);
      }}
      validate={validateUser}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>Formulario con Formik</h1>

          <label htmlFor="username">Username: </label>
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="Ingresa tu email..."
          />
          <ErrorMessage name="username" component={"div"} />
          <br />

          <label htmlFor="password">Password: </label>
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu password..."
          />
          <ErrorMessage name="password" component={"div"} />
          <br />

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}
