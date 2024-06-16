import React, { useState } from 'react';
import SignIn from './SignIn';
import MyRegister from './MyRegister'; // Ensure the correct path to MyRegister component

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      {isSignUp ? <MyRegister /> : <SignIn />}
      <button onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default SignInSignUp;




