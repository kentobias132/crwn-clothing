import React, { Component } from 'react';
import './sign-in.style.scss';
import CustomButton from "../custom-button/custom-button.component"
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(){
        super();

        this.state= {
            email: '',
            password: ''
        }
    }


    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password:''})
    }

    handleChange = event =>{
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email' 
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    /> 
                    <FormInput 
                        type="password" 
                        name='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    /> 
                    <div className='button'>
                        <CustomButton type="submit" > sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} googlebtn>  Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;