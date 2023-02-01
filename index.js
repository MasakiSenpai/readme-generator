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

- [Description](#description)

- [Installation Instructions](#installation-instructions)

- [Usage Info](#usage-info)

- [Contribution guidelines](#contribution-guidelines)

- [Test Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

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
${licenseBadges(data.license)}

## Questions
Github: ${data.username}

email: ${data.email}`;
            fs.writeFile(newFile, format, (err) =>  
        err ? console.log(err) : console.log('Success!')
        );
    });

    

    function licenseBadges(license) {
        switch (license) {
            case 'MIT': 
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'Apache': 
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            case 'GPLv2': 
            return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            case 'GPLv3': 
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            case 'BSD 3-clause': 
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            case 'The unlicense': 
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        }
    }