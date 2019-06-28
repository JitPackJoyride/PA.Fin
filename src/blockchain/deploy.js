const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'zone video enrich wasp flag text food call exist snap alarm actor',
  'https://rinkeby.infura.io/v3/80fe676d35f742b18076da1d8e6cafd3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there']})
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  return 0;
};

deploy();