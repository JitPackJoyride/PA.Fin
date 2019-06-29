const path = require('path');
const fs = require('fs');
const solc = require('solc');

const personalInformationPath = path.resolve(__dirname, 'contracts', 'PersonalInformation.sol');
console.log('the path is ', personalInformationPath);
const source = fs.readFileSync(personalInformationPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':PersonalInformation'];