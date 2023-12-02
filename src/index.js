import './index.css'

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const name = document.getElementById('name');
const name_success = document.getElementById('name_success');
const name_fail = document.getElementById('name_fail');

const nick = document.getElementById('nick');
const nick_success = document.getElementById('nick_success');
const nick_fail = document.getElementById('nick_fail');

const email = document.getElementById('email');
const email_success = document.getElementById('email_success');
const email_fail = document.getElementById('email_fail');

const password = document.getElementById('password');
const password_success = document.getElementById('password_success');
const password_fail = document.getElementById('password_fail');

const password_check = document.getElementById('check');
const check_success = document.getElementById('check_success');
const check_fail = document.getElementById('check_fail');

document.getElementById('join').addEventListener('click', function() {
    if(name.value.length !== 0){
        name_success.classList.remove('hide');
        name_fail.classList.add('hide');
    } else {
        name_success.classList.add('hide');
        name_fail.classList.remove('hide');
    }

    if(nick.value.length >= 2 && nick.value.length <= 5){
        nick_success.classList.remove('hide');
        nick_fail.classList.add('hide');
    } else {
        nick_success.classList.add('hide');
        nick_fail.classList.remove('hide');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(email.value)){
        email_success.classList.remove('hide');
        email_fail.classList.add('hide');
    } else {
        email_success.classList.add('hide');
        email_fail.classList.remove('hide');
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(passwordPattern.test(password.value)){
        password_success.classList.remove('hide');
        password_fail.classList.add('hide');
    } else {
        password_success.classList.add('hide');
        password_fail.classList.remove('hide');
    }

    if(password_check.value === password.value){
        check_success.classList.remove('hide');
        check_fail.classList.add('hide');
    } else {
        check_success.classList.add('hide');
        check_fail.classList.remove('hide');
    }
});
