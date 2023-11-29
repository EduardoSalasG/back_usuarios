
const bcrypt = require('bcrypt');

const saltRounds = 10;

async function encrypt(password: string) {
    let encrypted

    await bcrypt
        .hash(password, saltRounds)
        .then((hash: string) => {
            encrypted = hash;
        });

    return encrypted
}

async function check(plainPassword: string, encryptedPassword: string) {
    let result

    await bcrypt.compare(plainPassword, encryptedPassword)
        .then((resultado: boolean) => {
            result = resultado
            console.log(result)
        })

    return result
}

export {
    encrypt,
    check
}