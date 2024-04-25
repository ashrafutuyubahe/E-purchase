import React from "react";
import "./logincss.css";

 export default function Login(){


  return(

    <div class="login-container">
    <form class="login-form" id="login-form" action="/login" method="post">
      <label for="email">Email</label>
      <input type="email" id="email" name="useremail" />
      <label for="password">Password</label>
      <input type="password" id="password" name="userpassword" />
      <input type="submit" value="Login" />
    </form>
  </div>
  )
}