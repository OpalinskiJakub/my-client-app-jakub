import React from 'react';

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert('Logging in with ' + username + ' / ' + password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="username" type="text" placeholder="Username" />
      <input id="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
