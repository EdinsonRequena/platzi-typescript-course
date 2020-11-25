console.log('Hello!!!')

// Tipo: Number
// Explicito
let phone: number;
phone = 1;
phone = 54688464;
// phone = 'hola' // Error por tipo de dato

// Inferido
let phoneNumber = 454454;
phoneNumber = 123;
// phoneNumber = true // Error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b01000111;
let octal: number = 0o12554445;

// Tipo: Boolean
let isPro: boolean
isPro = true;

// Inferido
let isUserPro = false;
isUserPro = true;

// Tipo: String
let username: string
username = "edinsorequena"

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + 'Edinson'}
    phone: ${phone}
    isPro: ${isPro}
`;
