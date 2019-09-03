import React, { Component } from "react";
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    // Gives access to all the compenent attributes and methods
    super(props);

    // Define a base state
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      RegistrationErrors: "" // include a base state for any registration errors
    }

    // Handler for form submit
    this.handleSubmit = this.handleSubmit.bind(this);

    // Handler for changes in form
    this.handleChange = this.handleChange.bind(this);
  }

  // Placeholder for handleSubmit
  handleSubmit(event) {
    const {
      email,
      password,
      password_confirmation
    } = this.state;

    axios.post("http://localhost:3001/registrations",
      {user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
        }
      },
      { withCredentials: true } // Tells api that it's ok to set the cookie in or client
    ).then(response => {
      console.log("registration res", response);
    }).catch(error => {
      console.log("registration error", error);
    });
    event.preventDefault();
  }

  // Placeholder for handleChange
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      // Add form with submit handler
      // Make email, password holders, with html validations
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required>
        </input>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required>
        </input>
        <input type="password" name="password_confirmation" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required>
        </input>

        <button type="submit">Register</button>
      </form>
    )
  }
}
