// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `! [badge-image](https://img.shields.io/static/v1?label=license&message=${license.replace(
      "",
      "_"
    )})&color=green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `https://choosealicense.com/licenses/${license
      .toLowerCase()
      .replace("", "_")}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    licenseLink = renderLicenseLink(license);
    return `## License

    This project is licensed under the ${license} license.

    The link to the license is at ${licenseLink}.
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licensebadge = renderLicenseBadge(data.projectTitle);
  let licenseSection = renderLicenseSection(data.projectTitle);
  return `# ${data.projectTitle}
  ${licensebadge}

  ## Table of Contents

  -- [Description](#description)

  -- [Installation](#installation)

  -- [Usage](#usage)

  -- [Testing](#testing)

  -- [Contribute](#contribute)

  -- [License](#license)

  -- [Questions](#license)

  ## Description
  ${data.projectDescription}

  ## Installation
  ${data.installationInstructions}
  
  ## Usage
  ${data.usageInstructions}

  ## Testing
  ${data.testInstructions}

  ## Contribute
  ${data.contributionInstructions}

  ${licenseSection}

  ## Questions?
  Any questions or concerns with project please email me or contact via github.

  Github: https://github.com/{data.githubUser.name}

  Email: ${data.emailAddress}
  `;
}
module.exports = generateMarkdown;
