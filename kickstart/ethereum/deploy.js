const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "kiss derive mouse sample print assault isolate zero combine switch burst middle",
  "https://goerli.infura.io/v3/305f55128e034436b1b7f057aa6a5c0c"
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    // Get a list of all accounts

    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account: ", accounts[0]);

    // Use one of the accounts to deploy the contract
    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({
        data: compiledFactory.evm.bytecode.object,
        arguments: [],
      })
      .send({ from: accounts[0], gas: "5000000" });

    console.log("Contract deployed to: ", result.options.address);
  } catch (err) {
    console.log(err);
  }

  provider.engine.stop();
};

deploy();
