import React, { useState, useEffect } from 'react';
import './Register.css';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    // Estados del componente
    const [role, setRole] = useState('usuario');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // Campos de usuario
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
        // Campos de administrador
        nombreComercial: '',
        direccion: '',
        telefono: '',
        correo: '',
        passwordAdmin: '',
        // Campos de propietario
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        cedula: '',
        email: '',
        telefono: '',
        contraseña: '',
        confirmPassword: '',

    });

    // 👉 Función que hace el fetch
    const registrarUsuario = async () => {
        const data = {
            primerNombre: formData.nombre,
            primerApellido: formData.apellido,
            email: formData.email,
            contrasena: formData.password
        };

        try {
            const res = await fetch("http://localhost:8080/api/usuarios/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Error en el registro");
            }

            const json = await res.json();
            alert(`Usuario registrado: ${json.primerNombre}`);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    };

    // 👉 Función que hace el fetch admin
    const registrarAdministrador = async () => {
        const data = {
            nombreComercial: formData.nombreComercial,
            direccion: formData.direccion,
            telefono: formData.telefono,
            email: formData.email,
            contraseña: formData.password
        };

        try {
            const res = await fetch("http://localhost:8080/api/administradores/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Error en el registro");
            }

            const json = await res.json();
            alert(`Administrador registrado: ${json.nombreComercial}`);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    };
// 👉 Función que hace el fetch para registrar propietario
const registrarPropietario = async () => {
    const data = {
        primerNombre: formData.primerNombre,
        segundoNombre: formData.segundoNombre,
        primerApellido: formData.primerApellido,
        segundoApellido: formData.segundoApellido,
        cedula: formData.cedula,
        email: formData.email,
        telefono: formData.telefono,
        contraseña: formData.contraseña, // 👈 asegúrate de que coincida con tu backend
    };

    try {
        const res = await fetch("http://localhost:8080/api/propietarios/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error("Error en el registro del propietario");
        }

        // ⚡ Como la API devuelve un string, no un JSON:
        const message = await res.text();
        alert(message);

        navigate('/login');
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error en el registro");
    }
};



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (role === "usuario") {
            if (formData.password !== formData.confirmPassword) {
                setErrors({ confirmPassword: "Las contraseñas no coinciden" });
                return;
            }
            await registrarUsuario();
        }

        if (role === "admin") {
            if (!formData.nombreComercial || !formData.direccion) {
                setErrors({ submit: "Todos los campos son obligatorios" });
                return;
            }
            await registrarAdministrador();
        }

        if (role === 'propietario') {
            if (formData.contraseña !== formData.confirmPassword) {
                setErrors({ confirmPassword: "Las contraseñas no coinciden" });
                return;
            }
            await registrarPropietario();
        }
    };


    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Función para cambiar el rol
    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
        setErrors({}); // Limpiar errores al cambiar rol
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            confirmPassword: '',
            nombreComercial: '',
            direccion: '',
            telefono: '',
            correo: '',
            passwordAdmin: ''
        });
    };

    // Función para manejar cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpiar error del campo cuando el usuario empieza a escribir
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Evaluar fuerza de contraseña
        if (name === 'password' || name === 'passwordAdmin') {
            evaluatePasswordStrength(value);
        }
    };

    // Función para evaluar la fuerza de la contraseña
    const evaluatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        setPasswordStrength(Math.min(strength, 3)); // 0: débil, 1-2: medio, 3+: fuerte
    };

    // Función para validar email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Función para validar teléfono
    const validatePhone = (phone) => {
        const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
        return phoneRegex.test(phone);
    };

    // Función para validar el formulario
    const validateForm = () => {
        const newErrors = {};

        if (role === 'usuario') {
            // Validaciones para usuario
            if (!formData.nombre.trim()) {
                newErrors.nombre = 'El nombre es requerido';
            } else if (formData.nombre.length < 2) {
                newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
            }

            if (!formData.apellido.trim()) {
                newErrors.apellido = 'El apellido es requerido';
            } else if (formData.apellido.length < 2) {
                newErrors.apellido = 'El apellido debe tener al menos 2 caracteres';
            }

            if (!formData.email.trim()) {
                newErrors.email = 'El email es requerido';
            } else if (!validateEmail(formData.email)) {
                newErrors.email = 'El email no tiene un formato válido';
            }

            if (!formData.password) {
                newErrors.password = 'La contraseña es requerida';
            } else if (formData.password.length < 8) {
                newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
            } else if (passwordStrength < 2) {
                newErrors.password = 'La contraseña es muy débil. Usa mayúsculas, minúsculas, números y símbolos';
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Confirma tu contraseña';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Las contraseñas no coinciden';
            }
        } else {
            // Validaciones para administrador
            if (!formData.nombreComercial.trim()) {
                newErrors.nombreComercial = 'El nombre de la empresa es requerido';
            } else if (formData.nombreComercial.length < 3) {
                newErrors.nombreComercial = 'El nombre debe tener al menos 3 caracteres';
            }

            if (!formData.direccion.trim()) {
                newErrors.direccion = 'La dirección es requerida';
            } else if (formData.direccion.length < 10) {
                newErrors.direccion = 'La dirección debe ser más específica';
            }

            if (!formData.telefono.trim()) {
                newErrors.telefono = 'El teléfono es requerido';
            } else if (!validatePhone(formData.telefono)) {
                newErrors.telefono = 'El teléfono no tiene un formato válido';
            }

            if (!formData.correo.trim()) {
                newErrors.correo = 'El correo es requerido';
            } else if (!validateEmail(formData.correo)) {
                newErrors.correo = 'El correo no tiene un formato válido';
            }

            if (!formData.passwordAdmin) {
                newErrors.passwordAdmin = 'La contraseña es requerida';
            } else if (formData.passwordAdmin.length < 8) {
                newErrors.passwordAdmin = 'La contraseña debe tener al menos 8 caracteres';
            } else if (passwordStrength < 2) {
                newErrors.passwordAdmin = 'La contraseña es muy débil';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /*
    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simular llamada a API
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Formulario enviado exitosamente:', {
                role,
                 : {
        nombreEmpresa: formData.nombreEmpresa,
            direccion: formData.direccion,
                telefono: formData.telefono,
                    correo: formData.correo,
                        password: formData.passwordAdmin
    }
});

// Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
alert('¡Registro exitoso!');
            
        } catch (error) {
    console.error('Error en el registro:', error);
    setErrors({ submit: 'Ocurrió un error durante el registro. Inténtalo de nuevo.' });
} finally {
    setIsLoading(false);
}
    };*/

    // Función para obtener la clase de estado del input
    const getInputClass = (fieldName) => {
        if (errors[fieldName]) return 'error';
        if (formData[fieldName] && !errors[fieldName]) return 'success';
        return '';
    };

    // Función para obtener la clase de fuerza de contraseña
    const getPasswordStrengthClass = () => {
        if (passwordStrength === 0) return 'strength-weak';
        if (passwordStrength <= 2) return 'strength-medium';
        return 'strength-strong';
    };

    return (
        <div className='register-container'>
            <div className='register-card'>
                <div className='register-left'>
                    <div className='register-logo'>
                        <img src='/src/assets/logo.png' alt='Logo Inmosoft' />
                    </div>

                    <div className='role-buttons'>
                        <button
                            type='button'
                            className={role === 'usuario' ? 'active' : ''}
                            onClick={() => handleRoleChange('usuario')}
                            aria-label="Registrarse como usuario"
                        >
                            Registrarse como Usuario
                        </button>
                        <button
                            type='button'
                            className={role === 'admin' ? 'active' : ''}
                            onClick={() => handleRoleChange('admin')}
                            aria-label="Registrarse como administrador"
                        >
                            Registrarse como Administrador
                        </button>
                        <button
                            type="button"
                            className={role === 'propietario' ? 'active' : ''}
                            onClick={() => handleRoleChange('propietario')}
                            aria-label="Registrarse como propietario"
                        >
                            Registrarse como Propietario
                        </button>
                    </div>
                </div>

                <form className='register-form' onSubmit={handleSubmit} noValidate>
                    <h2 className='register-title'>
                        {role === 'usuario'
                            ? 'Crea Tu Cuenta Y Encuentra Tu Hogar Ideal'
                            : role === 'admin'
                                ? 'Registra Tu Empresa'
                                : 'Registra Tu Propiedad'}
                    </h2>

                    {/* Error general del formulario */}
                    {errors.submit && (
                        <div className="error-message" style={{ marginBottom: '1rem' }}>
                            {errors.submit}
                        </div>
                    )}

                    {/* Campos para Usuario */}
                    {role === 'usuario' && (
                        <>
                            <div className="form-field">
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    className={getInputClass('nombre')}
                                    required
                                    aria-describedby="nombre-error"
                                />
                                {errors.nombre && (
                                    <div className="error-message" id="nombre-error">
                                        {errors.nombre}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="apellido"
                                    placeholder="Apellido"
                                    value={formData.apellido}
                                    onChange={handleInputChange}
                                    className={getInputClass('apellido')}
                                    required
                                    aria-describedby="apellido-error"
                                />
                                {errors.apellido && (
                                    <div className="error-message" id="apellido-error">
                                        {errors.apellido}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={getInputClass('email')}
                                    required
                                    aria-describedby="email-error"
                                />
                                {errors.email && (
                                    <div className="error-message" id="email-error">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={getInputClass('password')}
                                    required
                                    aria-describedby="password-error"
                                />
                                {formData.password && (
                                    <div className="password-strength">
                                        <div className={`password-strength-bar ${getPasswordStrengthClass()}`}></div>
                                    </div>
                                )}
                                {errors.password && (
                                    <div className="error-message" id="password-error">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirmar Contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={getInputClass('confirmPassword')}
                                    required
                                    aria-describedby="confirm-password-error"
                                />
                                {errors.confirmPassword && (
                                    <div className="error-message" id="confirm-password-error">
                                        {errors.confirmPassword}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* Campos para Administrador */}
                    {role === 'admin' && (
                        <>
                            <div className="form-field">
                                <input
                                    type="text"
                                    name="nombreComercial"
                                    placeholder="Nombre Comercial"
                                    value={formData.nombreComercial}
                                    onChange={handleInputChange}
                                    className={getInputClass('nombreComercial')}
                                    required
                                    aria-describedby="empresa-error"
                                />
                                {errors.nombreComercial && (
                                    <div className="error-message" id="empresa-error">
                                        {errors.nombreComercial}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="direccion"
                                    placeholder="Dirección"
                                    value={formData.direccion}
                                    onChange={handleInputChange}
                                    className={getInputClass('direccion')}
                                    required
                                    aria-describedby="direccion-error"
                                />
                                {errors.direccion && (
                                    <div className="error-message" id="direccion-error">
                                        {errors.direccion}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="tel"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className={getInputClass('telefono')}
                                    required
                                    aria-describedby="telefono-error"
                                />
                                {errors.telefono && (
                                    <div className="error-message" id="telefono-error">
                                        {errors.telefono}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="email"
                                    name="correo"
                                    placeholder="Correo"
                                    value={formData.correo}
                                    onChange={handleInputChange}
                                    className={getInputClass('correo')}
                                    required
                                    aria-describedby="correo-error"
                                />
                                {errors.correo && (
                                    <div className="error-message" id="correo-error">
                                        {errors.correo}
                                    </div>
                                )}
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    name="passwordAdmin"
                                    placeholder="Contraseña"
                                    value={formData.passwordAdmin}
                                    onChange={handleInputChange}
                                    className={getInputClass('passwordAdmin')}
                                    required
                                    aria-describedby="password-admin-error"
                                />
                                {formData.passwordAdmin && (
                                    <div className="password-strength">
                                        <div className={`password-strength-bar ${getPasswordStrengthClass()}`}></div>
                                    </div>
                                )}
                                {errors.passwordAdmin && (
                                    <div className="error-message" id="password-admin-error">
                                        {errors.passwordAdmin}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* Campos para Propietario */}
                    {role === 'propietario' && (
                        <>
                            <div className="form-field">
                                <input
                                    type="text"
                                    name="primerNombre"
                                    placeholder="Primer Nombre"
                                    value={formData.primerNombre}
                                    onChange={handleInputChange}
                                    className={getInputClass('primerNombre')}
                                    required
                                />
                                {errors.primerNombre && <div className="error-message">{errors.primerNombre}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="segundoNombre"
                                    placeholder="Segundo Nombre"
                                    value={formData.segundoNombre}
                                    onChange={handleInputChange}
                                    className={getInputClass('segundoNombre')}
                                />
                                {errors.segundoNombre && <div className="error-message">{errors.segundoNombre}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="primerApellido"
                                    placeholder="Primer Apellido"
                                    value={formData.primerApellido}
                                    onChange={handleInputChange}
                                    className={getInputClass('primerApellido')}
                                    required
                                />
                                {errors.primerApellido && <div className="error-message">{errors.primerApellido}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="segundoApellido"
                                    placeholder="Segundo Apellido"
                                    value={formData.segundoApellido}
                                    onChange={handleInputChange}
                                    className={getInputClass('segundoApellido')}
                                />
                                {errors.segundoApellido && <div className="error-message">{errors.segundoApellido}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="cedula"
                                    placeholder="Cédula"
                                    value={formData.cedula}
                                    onChange={handleInputChange}
                                    className={getInputClass('cedula')}
                                    required
                                />
                                {errors.cedula && <div className="error-message">{errors.cedula}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={getInputClass('email')}
                                    required
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className={getInputClass('telefono')}
                                    required
                                />
                                {errors.telefono && <div className="error-message">{errors.telefono}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    name="contraseña"
                                    placeholder="Contraseña"
                                    value={formData.contraseña}
                                    onChange={handleInputChange}
                                    className={getInputClass('contraseña')}
                                    required
                                />
                                {errors.contraseña && <div className="error-message">{errors.contraseña}</div>}
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirmar Contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={getInputClass('confirmPassword')}
                                    required
                                />
                                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                            </div>


                        </>
                    )}

                    <button
                        type="submit"
                        className='register-button'
                        disabled={isLoading}
                        aria-label={`Registrarse como ${role}`}
                    >
                        {isLoading && <span className="loading-spinner"></span>}
                        {isLoading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;