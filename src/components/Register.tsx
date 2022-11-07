import React from "react";
import "./styles.css";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";

class Register extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(field: any, e: any) {
  //   let fields = this.state.fields;
  //   fields[field] = e.target.value;
  //   this.setState({ fields });
  // }

  handleSubmit(e: any) {
   console.log(e);
  }

  validationSchema() {
    return Yup.object().shape({
      firstName: Yup.string().required('Firstname is required'),
      lastName: Yup.string()
        .required('Lastname is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    });
  }

   
  render() {
     const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Register</h2>
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
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                 className={
                    'form-control' +
                    (errors.firstName && touched.firstName ? ' is-invalid' : '')
                  }
                // value={this.state.fields.firstName}
                // onChange={this.handleChange.bind(this, "firstName")}
              />
              <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                className={
                    'form-control' +
                    (errors.lastName && touched.lastName ? ' is-invalid' : '')
                  }
                // value={this.state.fields.lastName}
                // onChange={this.handleChange.bind(this, "lastName")}
              />  
               <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />   
            </div>
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
            <div className="password">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="text"
                placeholder="Confirm Password"
                name="confirmPassword"
                className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')
                  }
                // value={this.state.fields.confirmPassword}
                // onChange={this.handleChange.bind(this, "confirmPassword")}
              />
              <ErrorMessage
                  name="confirmPassword"
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
                  Already have an account?<a href="/login">LogIn.</a>
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
export default Register;