
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt ([{
    type: 'input',
    name: 'title',
    message: 'What is the Title of your Project?'
}, {
    type: 'input',
    name: 'description',
    message: 'Please describe your project..?'
},{
    type: 'input',
    name: 'install',
    message: 'What are the installation instructions?'
},{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions on how to use the project..'
},{
    type: 'input',
    name: 'contribution',
    message: 'Who all contributed to this project?'
},{
    type: 'input',
    name: 'test',
    message: 'How do you test your project?'
},{
    type: 'input',
    name: 'license',
    message: 'Please choose a license for your project..'
},
])
.then((answers) => {
    const readme = generatereadme(answers);

fs.writeFile('ReadMe.md', data, (err) =>
    err ? console.log(err) : console.log('Check out your new read me!')
);
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
