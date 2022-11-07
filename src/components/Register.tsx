import React from "react";
import "./styles.css";

class Register extends React.Component<any,any> {
  constructor(props: any) {
    super(props);

    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      errors: {
        firstName: '',
        lastName: '',
        email: ''
      },
    };
  }

  handleChange(field: any, e: any) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    if (this.handleValidation()) {
      console.log(this.state.fields);
      alert("Form submitted");
    } else {
      return;
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //First name
    if (!fields.firstName) {
      formIsValid = false;
      errors.firstName = "First name cannot be empty";
    }

    if (typeof fields.firstName !== "undefined") {
      if (!fields.firstName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.firstName = "Only letters";
      }
    }

    //Last name
    if (!fields.lastName) {
      formIsValid = false;
      errors.lastName = "Last name cannot be empty";
    }

    if (typeof fields.lastName !== "undefined") {
      if (!fields.lastName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.lastName = "Only letters";
      }
    }

    //Email
    if (!fields.email) {
      formIsValid = false;
      errors.email = "Email cannot be empty";
    }

    // if (typeof fields.email !== "undefined") {
    //   let lastAtPos = fields.email.lastIndexOf("@");
    //   let lastDotPos = fields.email.lastIndexOf(".");

    //   if (
    //     !(
    //       lastAtPos < lastDotPos &&
    //       lastAtPos > 0 &&
    //       fields.email.indexOf("@@") == -1 &&
    //       lastDotPos > 2 &&
    //       fields.email.length - lastDotPos > 2
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors.email = "Email is not valid";
    //   }
    // }


    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Register</h2>
          <form
            name="registerForm"
            className="registerForm"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={this.state.fields.firstName}
                onChange={this.handleChange.bind(this, "firstName")}
              />
              <span className="error">{this.state.errors.firstName}</span>
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.state.fields.lastName}
                onChange={this.handleChange.bind(this, "lastName")}
              />
              <span className="error">{this.state.errors.lastName}</span>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange.bind(this, "email")}
              />
              <span className="error">{this.state.errors.email}</span>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange.bind(this, "password")}
              />
            </div>
            <div className="submit">
              <button type="submit" id="submit" value="Submit">
                Submit
              </button>
              <br></br>
              <div className="a">
                <span>
                  Already have an account?<a href="/login">LogIn.</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;