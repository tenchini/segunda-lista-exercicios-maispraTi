const prompt = require('prompt-sync')()

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    return randomNumber
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 100) {
            return number
        }
        console.log('\nPor favor, digite um número inteiro válido entre 1 e 100')
    }
}

function getUserInput() {
    const userNumber = getValidNumber('Digite um número inteiro entre 1 e 100: ')
    return userNumber
}

function compareNumbers(randomNumber) {
    let count = 0
    while (true) {
        const userNumber = getUserInput()
        count++

        if (userNumber === randomNumber) {
            console.log(`Parabéns, você acertou em ${count} tentativas!`)
            return true
        }

        if (userNumber < randomNumber) {
            console.log('mais alto')
        } else {
            console.log('mais baixo')
        }
    }
}

function main() {
    const randomNumber = generateRandomNumber()
    compareNumbers(randomNumber)
}

main()
