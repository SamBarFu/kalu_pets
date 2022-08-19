import React from "react"
import { Link } from "react-router-dom"
import AuthLayout from "@layouts/AuthLayout"
import { FormWrapper, FooterFormWrapper } from "./Login.styled"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { forgotSchema } from "./Auth.validation"
import SBButton from "@components/SBButton"

function Forgot() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  const initialValues = {
    email: "",
  }

  return (
    <AuthLayout title="Forgot password" subtitle={text}>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="input-group primary">
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo"
                />
                <ErrorMessage className="error" name="email" component="span" />
              </div>
              <br />
              <SBButton
                text="Sumbit"
                type="submit"
                color="secondary"
                extended
                disabled={isSubmitting}
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

export default Forgot
