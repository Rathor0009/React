import React from "react";
import "./styles.css";
class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
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
          <h2>Login</h2>
          <form
            name="loginForm"
            className="loginForm"
            onSubmit={this.handleSubmit.bind(this)}
          >
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
                  Don`t have an account?<a href="/register">SignUp.</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
