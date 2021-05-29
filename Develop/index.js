
const inquirer = require('inquirer');
const fs = require('fs');

// data writen in the readme 
const generatereadme = (answers) =>
 `# ${answers.title}
## Table of Contents 

[Description](#Description)
[Questions](#Questions?!)


## Description 
 ${answers.description}
    
## Installation Instructions
* Please follow the following instrutions..
 ${answers.install}
    
## Instructions
 ${answers.usage}
    
## Contributors
 ${answers.contribution}
    
## Test
 ${answers.test}
    
## License 
 ${answers.license}

## Questions?!
 ${answers.questions}
 ${answers.email}`
 ;
 // questions terminal asks the user   
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
    message: 'How do you install the Project?'
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
},{
    type: 'input',
    name: 'questions',
    message: 'Please provide your Github Profile link'
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your email address'
},
])
.then((answers) => {
    const readme = generatereadme(answers);
//write the answers pulled from above into readme 
fs.writeFile('ReadMe.md', readme, (err) =>
    err ? console.log(err) : console.log('Check out your new read me!')
);
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
