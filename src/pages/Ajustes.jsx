import React, { useState } from "react";
import "./Ajustes.css";

export default function Ajustes() {
  const [formData, setFormData] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    cedula: "",
    telefono: "",
    correo: "",
    contrasena: "",
    nuevaContrasena: "",
    confirmarContrasena: "",
  });

  // cambio en cada input 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // envia el formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos actualizados:", formData);
    alert("Tus datos se han actualizado correctamente ✅");
  };

  return (
    <div className="ajustes-container">
      <h1>Ajustes de Usuario</h1>
      <form className="ajustes-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Primer Nombre</label>
          <input
            type="text"
            name="primerNombre"
            value={formData.primerNombrenombre}
            onChange={handleChange}
            placeholder="Ingresa tu primer nombre"
          />
        </div>

        <div className="form-group">
          <label>Segundo Nombre</label>
          <input
            type="text"
            name="segundoNombre"
            value={formData.segundoNombre}
            onChange={handleChange}
            placeholder="Ingresa tu segundo nombre"
          />
        </div>

        <div className="form-group">
          <label>Primer Apellido</label>
          <input
            type="text"
            name="primerApellido"
            value={formData.primerApellido}
            onChange={handleChange}
            placeholder="Ingresa tu primer apellido"
          />
        </div>

        <div className="form-group">
          <label>Segundo Apellido</label>
          <input
            type="text"
            name="segundoApellido"
            value={formData.segundoApellido}
            onChange={handleChange}
            placeholder="Ingresa tu segundo apellido"
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej: 300 123 4567"
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
          />
        </div>

       
        <div className="form-group">
          <label>Contraseña actual</label>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña actual"
          />
        </div>

        <div className="form-group">
          <label>Nueva contraseña</label>
          <input
            type="password"
            name="nuevaContrasena"
            value={formData.nuevaContrasena}
            onChange={handleChange}
            placeholder="Ingresa la nueva contraseña"
          />
        </div>

        <div className="form-group">
          <label>Confirmar nueva contraseña</label>
          <input
            type="password"
            name="confirmarContrasena"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            placeholder="Repite la nueva contraseña"
          />
        </div>

        <button type="submit" className="btn-guardar">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}