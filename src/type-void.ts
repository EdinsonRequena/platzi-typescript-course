// Void

// Tipo explicito
function showInfo(user:any): any {
    console.log('User Info', user.id, user.username, user.firstname)
}

showInfo({id: 1, username: 'edinsonrequena', firstname: 'Edinson'})

// Tipo inferido
function showFormattedInfo(user:any) {
    console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
    first name: ${user.firstname}
    `)
}

showFormattedInfo({id: 1, username: 'edinsonrequena', firstname: 'Edinson'})

// Tipo void en variables
let unusable: void
unusable = undefined

// Tipo:Never
function handleError(code: number, msg: string): never {

    // Porcess your code here
    // Generate a Message
    throw new Error(`${msg}. Code: ${code}`)
}

try {
    handleError(404, 'Not found')
} catch (error) {
}

function sumNumbers(limits:number):never {
    let sum:number = 0
    while (true) {
        sum++
    }
}

sumNumbers(10)
// Ciclo Infinito