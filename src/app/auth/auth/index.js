import React, { useState, useEffect } from "react";
import { Login } from "../login";
import { PasswordChange } from "../password-change/index";
import { PasswordForgot } from "../password-forgot";
import { Register } from "../register";
import { Route, Switch, Redirect } from "react-router-dom";
import { Hometitle } from "../home-title";
import "./index.css";

export const Auth = ({ loginDispatch, onClick }) => {
  return (
    <div className='auth' onClick={onClick}>
      <Hometitle />
      <Switch>
        <Route path='/post'>
          <Redirect to='/login' />
        </Route>
        <Route path='/create'>
          <Redirect to='/login' />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login loginDispatch={loginDispatch} />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/password_forgot'>
          <PasswordForgot />
        </Route>
        <Route exact path='/password_change'>
          <PasswordChange />
        </Route>

        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </div>
  );
};
