import { useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities'
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
const defaultFormFields = {
  displayName: ' ',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword){
      alert("Passwords Don't Match")
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    }
    catch(error){
      console.log('user creation error')
    }
  };

  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormFields( { ...formFields, [name]:value });
  };

  return (
    <div className = 'sign-up-container'>
      <h2>Dont Have an Account?</h2>
      <span> Sign up down here! </span>
      <form onSubmit = {handleSubmit}>
        <FormInput
        label = "Display Name"
        type = 'text'
        required
        onChange = {handleChange}
        name= "displayName"
        value = {displayName}/>
        <FormInput
        label = "Email"
        type = 'text'
        required
        onChange = {handleChange}
        name= "email"
        value = {email}
        />
        <FormInput
        label = "Password"
        type = 'password'
        required
        onChange = {handleChange}
        name= "password"
        value = {password}
        />
        <FormInput
        label = "Confirm Password"
        type = 'password'
        required
        onChange = {handleChange}
        name= "confirmPassword"
        value = {confirmPassword}
        />


        <Button type = 'submit' >Sign up!</Button>
      </form>
    </div>
  )
}
export default SignUpForm;
