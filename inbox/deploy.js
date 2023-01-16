const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compilation = require("./compile");

const provider = new HDWalletProvider(
  "kiss derive mouse sample print assault isolate zero combine switch burst middle",
  "https://goerli.infura.io/v3/305f55128e034436b1b7f057aa6a5c0c"
);

const web3 = new Web3(provider);

const deploy = async () => {
  // Get a list of all accounts

  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deply from account: ", accounts[0]);

  // Use one of the accounts to deploy the contract
  const result = await new web3.eth.Contract(compilation.abi)
    .deploy({
      data: compilation.evm.bytecode.object,
      arguments: ["Hi There!"],
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to: ", result.options.address);

  provider.engine.stop();
};

deploy();
