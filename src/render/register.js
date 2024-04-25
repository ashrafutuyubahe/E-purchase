import React from "react";
import "./register.css"

export default function RenderRegister() {
  return (
    <div className="container">
      <h2>Create an Account</h2>
      <form action="/register" method="post" id="registrationForm">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="useremail" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="userpassword" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="username" />
        </div>
        <button type="submit">Register</button>
        <h5>
          already have an account. <a id="haveAccount" href="/login">Log in</a>
        </h5>
      </form>
    </div>
  );
}
