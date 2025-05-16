import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const log = (msg) => {
    console.log('LOG:', msg);
  };

  return (
    <div>
      <h1>Welcome</h1>
      {!loggedIn && <LoginForm />}
    </div>
  );
}

export default App;
