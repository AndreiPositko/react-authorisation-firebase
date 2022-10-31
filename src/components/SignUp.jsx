// libs
import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

// firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// components
import Form from './Form';

// store
import {setUser} from '../store/slices/userSlice';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hadleLogin = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      navigate('/');
    })
    .catch(console.error)
  };
  return (
    <Form
      title='sign up'
      handleClick={hadleLogin}
    />
  );
};

export default SignUp;
