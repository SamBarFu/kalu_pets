import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("Ingrese un correo válido"),
  password: Yup.string().required("Introduzca su contraseña"),
})

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("Usuario inválido"),
  password: Yup.string()
    .required("Introduzca su contraseña")
    .min(8, "La contraseña es muy corta"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "La contraseña no coincide"
  ),
})

export const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("Usuario inválido"),
})
