import React, { Component } from "react";

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
    console.log("form submitted");
    // keep form from behaving like an html form,
    // just want method to be called
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
