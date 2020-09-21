import React from 'react';
import './sign-up.style.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {
  auth,
  createUserProfileDocument,
} from './../../firebase/firebase.util';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="Full Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up From Here</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
