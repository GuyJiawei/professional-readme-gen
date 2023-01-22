const licenses = {
  MIT: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
  Apache: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
  Unlicense: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return data.license ? `![License Badge] (https://img.shields.io/badge/license-${data.license}-green.svg)` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return data.license ? `https://choosealicense.com/licenses/${data.license}/` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return data.license ? `
  ## License
  - ${data.license}
  - ${renderLicenseLink(data)}
  - ${licenses[data.license]}
  `: '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contrubuting)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Testing

  ${data.testing}

  ${renderLicenseSection(data)}

  ## Questions

  If you have any questions or require further information, please contact me at:

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
