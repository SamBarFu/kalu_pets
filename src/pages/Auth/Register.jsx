import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "@layouts/AuthLayout"
import { FormWrapper, FooterFormWrapper } from "./Login.styled"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { registerSchema } from "./Auth.validation"
import SBButton from "@components/SBButton"
import { useSelector, useDispatch } from "react-redux"
import { registerUser, registerUserSuccess } from "@slices/Auth/Register.slice"
import Message from "@components/Message"

function Register() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { requesting, message, successful } = useSelector(
    (state) => state.register
  )

  const initialValues = {
    name: "samuel",
    city: "Managua",
    email: "sambarberena@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
  }

  useEffect(() => {
    if (successful) {
      dispatch(registerUserSuccess({}))
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  }, [successful])

  return (
    <AuthLayout title="Hello!" subtitle={text}>
      <FormWrapper>
        {message && (
          <Message text={message} status={successful ? "success" : "alert"} />
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            dispatch(registerUser(values))
          }}
        >
          {() => (
            <Form>
              <div className="input-group primary">
                <Field
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                />
                <ErrorMessage className="error" name="name" component="span" />
              </div>

              <div className="input-group primary">
                <Field
                  type="text"
                  name="city"
                  placeholder="Ingrese su ciudad"
                />
                <ErrorMessage className="error" name="city" component="span" />
              </div>

              <div className="input-group primary">
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo"
                />
                <ErrorMessage className="error" name="email" component="span" />
              </div>

              <div className="input-group primary">
                <Field
                  type="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="span"
                />
              </div>

              <div className="input-group primary">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Ingrese de nuevo su contraseña"
                />
                <ErrorMessage
                  className="error"
                  name="confirmPassword"
                  component="span"
                />
              </div>

              <br />
              <SBButton
                text="Sumbit"
                type="submit"
                color="secondary"
                extended
                disabled={requesting}
              />
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <FooterFormWrapper>
        Already have account? <Link to="/login">Login</Link>
      </FooterFormWrapper>
    </AuthLayout>
  )
}

export default Register
