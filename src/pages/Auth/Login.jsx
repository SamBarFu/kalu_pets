import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "@layouts/AuthLayout"
import { FormWrapper, FooterFormWrapper } from "./Login.styled"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { loginSchema } from "./Auth.validation"
import { useSelector, useDispatch } from "react-redux"
import { loginUser, loginReset } from "@slices/Auth/Login.slice"
import SBButton from "@components/SBButton"
import Message from "@components/Message"

function Login() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const location = useLocation()

  const { requesting, message, successful, to } = useSelector(
    (state) => state.login
  )

  const initialValues = {
    email: "sambarberena@gmail.com",
    password: "samuel123",
  }

  useEffect(() => {
    if (to && to !== "/login") {
      navigate(to)
      dispatch(loginReset())
    }
  }, [successful])

  /* useEffect(() => {
    if (successful) {
      const origin = location.state?.from?.pathname || "/login"
      navigate(origin)
      dispatch(loginReset())
    }
  }, [successful]) */

  return (
    <AuthLayout title="Hello!" subtitle={text}>
      <FormWrapper>
        {message && (
          <Message text={message} status={successful ? "success" : "alert"} />
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            dispatch(loginUser(values))
          }}
        >
          {() => (
            <Form>
              <div className="input-group primary">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage className="error" name="email" component="span" />
              </div>

              <div className="input-group primary">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="span"
                />
              </div>

              <div className="input-group-row">
                <div className="input-group primary">
                  <label className="input-check">
                    <Field type="checkbox" name="remember" />
                    Remember me
                  </label>
                </div>
                <Link className="forgot-password" to="/forgot-password">
                  Reset password?
                </Link>
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
        Don&apos;t have an account yet? <Link to="/register">Sign Up</Link>
      </FooterFormWrapper>
    </AuthLayout>
  )
}

export default Login
