const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
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
        fs.writeFile(newFile, JSON.stringify(data), (err) =>  
        err ? console.log(err) : console.log('Success!')
        );
    
    });

    

    // function LicenseBadges() {
        
    // }