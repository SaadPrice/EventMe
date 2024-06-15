import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import Register from '../components/MyRegister'; // Correct path to MyRegister component

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      {isSignUp ? <Register /> : <SignIn />}
      <button onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default SignInSignUp;


