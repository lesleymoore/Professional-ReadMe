
const inquirer = require('inquirer');
const fs = require('fs');

// data writen in the readme 
const generatereadme = (answers) =>
 `# ${answers.title}
## Table of Contents 

[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Tests](#Tests)

[Contributing](#Contributing)
[License](#License)
[Questions](#Questions?!)


## Description 
 ${answers.description}
    
## Installation
* Please follow the following instrutions..
* ${answers.install}
    
## Usage
 ${answers.usage}
    
## Contributing
 ${answers.contribution}
    
## Tests
 ${answers.test}
    
## License 
 ${answers.license}
 

## Questions?!
 * Please contact me through Github or Email with any questions you have about the project

 [${answers.questions}](https://github.com/${answers.questions})

 ${answers.email}`
 ;

 const MIT = 'MIT        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 const Apache = 'Apache          [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
 const Mozilla = 'Mozilla         [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
 const BSD = 'BSD 3-Clause         [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
 const Eclipse = 'Eclipse         [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
 const licensearray = [MIT , Apache, Mozilla, BSD, Eclipse]

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
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license for your project..',
    choices: licensearray,
},{
    type: 'input',
    name: 'questions',
    message: 'Please provide your Github Username'
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
