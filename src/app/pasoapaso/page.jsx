// pages/formulario.js
"use client";

import { useState } from "react";

export default function Formulario() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert("Formulario enviado");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Paso 1</h2>
            <label>
              Nombre:
              <input type="text" name="nombre" />
            </label>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Paso 2</h2>
            <label>
              Correo Electrónico:
              <input type="email" name="email" />
            </label>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Paso 3</h2>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Formulario por Pasos</h1>
      <div>{renderStep()}</div>
      <div style={{ marginTop: "20px" }}>
        {currentStep > 1 && (
          <button onClick={handlePrev} style={{ marginRight: "10px" }}>
            Anterior
          </button>
        )}
        {currentStep < totalSteps ? (
          <button onClick={handleNext}>Siguiente</button>
        ) : (
          <button onClick={handleSubmit}>Enviar</button>
        )}
      </div>
    </div>
  );
}
