"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstname);
}
showInfo({ id: 1, username: 'edinsonrequena', firstname: 'Edinson' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n    id: " + user.id + "\n    username: " + user.username + "\n    first name: " + user.firstname + "\n    ");
}
showFormattedInfo({ id: 1, username: 'edinsonrequena', firstname: 'Edinson' });
// Tipo void en variables
var unusable;
unusable = undefined;
// Tipo:Never
function handleError(code, msg) {
    // Porcess your code here
    // Generate a Message
    throw new Error(msg + ". Code: " + code);
}
try {
    handleError(404, 'Not found');
}
catch (error) {
}
