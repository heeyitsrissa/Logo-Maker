//download packages

const inquirer = require('inquirer');
const fs = require('fs')

//prompt questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input logo text (only up to 3 characters):'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like your text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        messages: 'Choose your logos shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'logo-color',
        message: 'What color would you like you logo to be?'
    }
]

//write a function to write the SVG file names 'logo.svg'
//when logo prints the text 'generated logo.svg' is console logged