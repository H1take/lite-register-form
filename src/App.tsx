import React, { useState } from "react";

import "./App.css";

const useFormField = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};

const App = (): React.ReactElement => {
  const usernameField = useFormField();
  const emailField = useFormField();
  const passwordField = useFormField();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="header">Welcome</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input className="formInput" type="email" id="email" {...emailField} />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input className="formInput" type="username" id="username" {...usernameField} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="formInput" type="password" id="password" {...passwordField} />
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default App;
