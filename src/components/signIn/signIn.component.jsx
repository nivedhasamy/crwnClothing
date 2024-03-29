import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

import './signIn.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' });
    }catch(err ){
      console.log(err);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='signIn'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className="buttons">
          <CustomButton type='submit'> sign in </CustomButton>
          <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn> sign in with google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;