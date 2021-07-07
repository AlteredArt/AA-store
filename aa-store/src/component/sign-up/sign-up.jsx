import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password === confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
                );

                createUserProfileDocument(user, {displayName});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onchange={this.handleChange}
                        label="Display Name"
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onchange={this.handleChange}
                        label="Email"
                        />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onchange={this.handleChange}
                        label="Password"
                        required='true'
                        />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onchange={this.handleChange}
                        label="Confirm Password"
                        />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;