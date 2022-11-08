import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
