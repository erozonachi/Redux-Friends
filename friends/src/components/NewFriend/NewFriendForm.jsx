import React, { useEffect, } from 'react';
import FormContainer from './StyledComponents/FormContainer';

export default function NewFriendForm(props) {
  let id = props.match.params.id.trim();
  const initialFriendState = {
    name: '',
    age: '',
    email: '',
    sex: '',
  };
  const initialVals = (id? props.getFriend(id) : initialFriendState);

  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const sexInput = React.createRef();
  const emailInput = React.createRef();

  useEffect(() => {
    nameInput.current.value = initialVals.name;
    ageInput.current.value = initialVals.age;
    sexInput.current.value = initialVals.sex;
    emailInput.current.value = initialVals.email;
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameInput.current.value && ageInput.current.value && 
      emailInput.current.value && sexInput.current.value) {
      const friend = {
        name: nameInput.current.value,
        age: ageInput.current.value,
        sex: sexInput.current.value,
        email: emailInput.current.value,
      }
      id? props.editSubmitHandler(friend, id) : props.addSubmitHandler(friend);
      id = null;
      props.history.push('/');
    }
  }

  return(
    <FormContainer>
      <h2>{props.match.params.id.trim()? 'Edit Existing Friend' : 'Add New Friend'}</h2>
      <form onSubmit={handleSubmit}>
        <input  
          ref={nameInput} 
          placeholder='Enter Name' />
        <input 
          ref={ageInput} 
          placeholder='Enter Age' />
        <input 
          ref={sexInput} 
          placeholder='Enter Gender' />
        <input 
          ref={emailInput} 
          placeholder='Enter Email' />
        <button type='submit'>{props.match.params.id.trim()? 'Edit Friend' : 'Add Friend'}</button>
      </form>
    </FormContainer>
  );
}
