import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {browserHistory} from 'react-router';

class Register extends Component{

  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
            {this.props.errorMessage}
        </div>
      )
    }
  }

  componentWillMount(){
    if(this.props.authenticated === true){
      browserHistory.push("/");
    }
  }

  handleFormSubmit(formProps){
    this.props.registerUser(formProps);
  }

  render(){
    const {handleSubmit,fields:{email,password,passwordConfirmation}} = this.props;
      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} />
            {email.touched && email.error && <div className="text-danger">{email.error}</div>}
          </fieldset>

          <fieldset className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" {...password}/>
            {password.touched && password.error && <div className="text-danger">{password.error}</div> }
          </fieldset>
          <fieldset className="form-group">
            <label>Password Confirmation:</label>
            <input  type="password" className="form-control" {...passwordConfirmation} />
            {passwordConfirmation.touched && email.error && <div className="text-danger">{passwordConfirmation.error}</div>}
          </fieldset>

          <button action="submit" className="btn btn-primary">Register</button>
          
        </form>

      );

      }

}

function mapStateToProps(state){
  return {
    errorMessage:state.auth.error,
    authenticated:state.auth.authenticated
  };
}

function validate(formProps){
const errors = {};

  if(! formProps.email){
    errors.email = "Please enter your email!";
  }

  if(formProps.password !== formProps.passwordConfirmation){
    errors.password = "Password must match";
  }

  if(! formProps.passwordConfirmation){
    errors.passwordConfirmation = "Please enter your password confirmation";
  }

  return errors;

}

export default reduxForm({
  form :'register',
  fields:['email','password','passwordConfirmation'],
  validate:validate
},mapStateToProps,actions)(Register);
