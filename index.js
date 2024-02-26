//download packages

const inquirer = require('inquirer');
const fs = require('fs')

//prompt questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input logo text (only up to 3 characters):',
        validate: function(input) {
            if(input.length > 3) {
                return 'Please enter only up to 3 characters'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
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
        name: 'logoColor',
        message: 'What color would you like you logo to be?'
    }
]


function generateSVG(data){
    const { text, textColor, shape, logoColor } = data;
    let shapeSvg = '';
    switch(shape){
        case 'circle':
            shapeSvg = `<circle cx="150" cy="100" r="80" fill="${logoColor}" />`;
            break;
        case 'square':
            shapeSvg = `<rect x="100" y="50" width="200" height="200" fill="${logoColor}" />`;
            break;
        case 'triangle':
            const points = "150,20 250,180 50,180";
            shapeSvg = `<polygon points="${points}" fill="${logoColor}" />`;
            break;
        default:
            throw new Error('Unsupported shape:' + shape);
    }
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}
//write a function to write the SVG file names 'logo.svg'
//when logo prints the text 'generated logo.svg' is console logged

function writeToFile(data){
    const fileName = `logo.svg`;
    const svgContent = generateSVG(data);
    fs.writeFile(fileName, svgContent, (err) =>{
        if(err){
            console.error(`Error writing file`, (err));
        } else {
            console.log(`Generated logo.svg`)
            generateHTML(svgContent);
        }
    })
}

function generateHTML(svgContent){
    const htmlContent = `   
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Logo Viewer</title>
    </head>
    <body>
        ${svgContent}
    </body>
    </html>`;
    fs.writeFile('index.html', htmlContent, (err) => {
        if(err){
            console.error('Error writing HTML file:', err);
        } else {
            console.log('Generated index.html');
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    })
    .catch((error) => {
        console.error(`Error`, error);
    })
}

init();