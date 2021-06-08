import React from 'react';

import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
// creare cont nou
    handleSubmit = async e =>{
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword ){
            alert('Parolele nu corespund');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
// stergere info din form
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        }catch(error){
            console.log(error);
        }
    }

    handleChange = e =>{
        const { name, value } = e.target;

        this.setState({[name] : value});
    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
            <h2 className="title">Creează un cont </h2>
            <span>Înregistrează-te cu o adresă de mail și o parolă </span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput
                 type ='text'
                 name='displayName'
                 value={displayName}
                 onChange={this.handleChange}
                 label= "nume"
                 required
                 />
                <FormInput
                 type ='email'
                 name='email'
                 value={email}
                 onChange={this.handleChange}
                 label= "email"
                 required
                 />
                <FormInput
                 type ='password'
                 name='password'
                 value={password}
                 onChange={this.handleChange}
                 label= "parolă"
                 required
                 />
                <FormInput
                 type ='password'
                 name='confirmPassword'
                 value={confirmPassword}
                 onChange={this.handleChange}
                 label= "confirmă parola"
                 required
                 />
                 <CustomButton type='submit'>Creează cont</CustomButton>
            </form>
            </div>
        )
    }
}

export default SignUp;