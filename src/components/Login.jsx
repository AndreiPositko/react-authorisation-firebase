// libs
import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

// firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// components
import Form from './Form';

// store
import {setUser} from '../store/slices/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hadleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      navigate('/');
    })
    .catch(() => alert('Invalid user!'))
  };

  return (
    <Form
      title='sign in'
      handleClick={hadleLogin}
    />
  );
};

export default Login;
