import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';


const Authentication = () => {
  return (
    <div>
      <div className ="signInPageTitle"><h1> Sign in page </h1></div>
      <div className = "authentication-container">
      <SignInForm />

      <SignUpForm />
      </div>
    </div>
  )
};

export default Authentication;
