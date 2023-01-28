const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Are there any installation instructions?'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'How about usage info?'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Any test instructions?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license?',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'The unlicense']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            input: 'input',
            name: 'email',
            message: 'What be your email address?'
        }
    ]).then((data) => {
        const newFile = 'README.md';
        
        const format = 
            `# ${data.projectName} 
## Table of Contents

- [Description](#Description)

- [Installation Instructions](#Installation)

- [Usage Info](#Usage)

- [Contribution guidelines](#Contribution)

- [Test Instructions](#Test)

- [License](#License)

## Description
${data.description}

## Installation Instructions
${data.instructions}

## Usage Info
${data.usageInfo}

## Contribution guidelines
${data.contributions}

## Test Instructions
${data.test}

## License
${licenseBadges(data.license)}`;
            fs.writeFile(newFile, format, (err) =>  
        err ? console.log(err) : console.log('Success!')
        );
    });

    

    function licenseBadges(license) {
        switch (license) {
            case 'MIT': 
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
            case 'Apache': 
            `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
            case 'GPLv2': 
            `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            break;
        }
    }