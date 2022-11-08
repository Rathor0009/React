import React from "react";
import "./styles.css";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";

export default class Login extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
   console.log(e);
  }

  validationSchema() {
    return Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
    });
  }

   
  render() {
     const initialValues = {
      email: '',
      password: '',
    };
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login</h2>
          <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ errors, touched }) => (
          <Form
            name="registerForm"
            className="registerForm"
          >
            <div className="email">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                placeholder="Enter Email"
                name="email"
                className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                // value={this.state.fields.email}
                // onChange={this.handleChange.bind(this, "email")}
              />
               <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <Field
                type="text"
                placeholder="Enter Password"
                name="password"
                 className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                // value={this.state.fields.password}
                // onChange={this.handleChange.bind(this, "password")}
              />
              <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
            </div>
            <div className="submit">
              <button type="submit" id="submit" value="Submit">
                Submit
              </button>
              {/* <br></br> */}
            </div>
            <div className="a">
               <span>
                  Don`t have an account?<a href="/register">SignUp.</a>
                </span>
              </div>
          </Form>
          )}
          </Formik>
        </div>
      </div>
    );
  }
}