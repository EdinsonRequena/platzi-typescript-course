"use strict";
console.log('Hello!!!');
// Tipo: Number
// Explicito
var phone;
phone = 1;
phone = 54688464;
// phone = 'hola' // Error por tipo de dato
// Inferido
var phoneNumber = 454454;
phoneNumber = 123;
// phoneNumber = true // Error por tipo de dato
var hex = 0xf00d;
var binary = 71;
var octal = 2808101;
// Tipo: Boolean
var isPro;
isPro = true;
// Inferido
var isUserPro = false;
isUserPro = true;
// Tipo: String
var username;
username = "edinsorequena";
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + 'Edinson') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
