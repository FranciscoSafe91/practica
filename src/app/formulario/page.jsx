"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Para validación

const Formulario = () => {
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    email: Yup.string()
      .email("Debe ser un correo electrónico válido")
      .required("El email es obligatorio"),
  });

  // Función de envío de formulario
  const handleSubmit = (values, { resetForm }) => {
    console.log("Datos enviados:", values);
    resetForm(); // Limpia el formulario
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Formulario Simple</h1>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingresa tu nombre"
              />
              <ErrorMessage
                name="nombre"
                component="div"
                style={{ color: "red", fontSize: "0.8em" }}
              />
            </div>

            {/* Campo Email */}
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "0.8em" }}
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: "20px" }}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
