import React from 'react';

const SignInForm = () => {
  return (
    <div>
      <h2>Sign In Form</h2>
      {/* Add your sign-in form elements here */}
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;