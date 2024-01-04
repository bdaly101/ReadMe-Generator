// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description 
${data.description}

## Installation Instructions 
${data.installation}

## Usage 
${data.usage}

## Contribution Guidelines 
${data.contribution}

## Tests 
${data.testInstruct}

## License 
${data.license}

## Questions 
If you have any questions, please reach out to me at ${data.email}.
Find me on GitHub: [${data.github}](https://github.com/${data.github})
  `;
};


module.exports = generateMarkdown;
