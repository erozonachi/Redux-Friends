import React from 'react';
import FormContainer from './NewFriend/StyledComponents/FormContainer';
import { connect } from 'react-redux';

function LoginForm(props) {

  const usernameInput = React.createRef();
  const passwordInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usernameInput.current.value.trim() && passwordInput.current.value.trim()) {
      const user = {
        username: usernameInput.current.value,
        password: passwordInput.current.value,
      }
      props.userLogin(user);
    }
  }

  return(
    <FormContainer>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input  
          ref={usernameInput} 
          placeholder='Enter Username' />
        <input 
          ref={passwordInput} 
          placeholder='Enter Password' />
        <button type='submit'>Login</button>
      </form>
    </FormContainer>
  );
}

const mapStateToProps = state => ({app: state.appState});

export default connect(mapStateToProps, {})(LoginForm);
