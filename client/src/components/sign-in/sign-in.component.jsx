import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,  signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
   e.preventDefault();

   const { email, password} = this.state;

   try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password:''})
   } catch(error){
     console.log(error);
   }
    
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Am deja un cont</h2>
        <span>Introdu adresa de mail și parola</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='parolă'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Continuă </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              AUTENTIFICARE PRIN GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;