const { readFileSync, existsSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const filePath = resolve(`${__dirname}/test.txt`) ;

const isFileExists = existsSync(filePath);

if(!isFileExists) writeFileSync(filePath, '👋 Fin Hack 2019');

const fileContent = readFileSync(filePath, 'utf8');

if(fileContent) console.log(fileContent);
