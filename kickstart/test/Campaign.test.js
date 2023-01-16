const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledCampaign = require("../ethereum/build/Campaign.json");
const compiledFactory = require("../ethereum/build/CampaignFactory.json");

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async () => {
  // Get a list of all accounts

  accounts = await web3.eth.getAccounts();

  // Use one of the accounts to deploy the contract
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object,
      arguments: [],
    })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "3000000",
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe("Campaigns", () => {
  it("deploys a contract", () => {
    expect(factory.options.address).toBeTruthy();
    expect(campaign.options.address).toBeTruthy();
  });

  it("it marks caller of the createCampaign as manager of the campaign", async () => {
    const manager = await campaign.methods.manager().call();
    expect(manager).toBe(accounts[0]);
  });

  it("allows people can contribute to the campaign and mark them as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });

    const isApprover = await campaign.methods.approvers(accounts[1]).call();

    expect(isApprover).toBe(true);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        value: "5",
        from: accounts[0],
      });

      expect(true).toBe(false);
    } catch (err) {}
  });

  it("allows a manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Buy batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "3000000",
      });

    const request = await campaign.methods.requests(0).call();

    expect(request.description).toBe("Buy batteries");
  });

  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({
        from: accounts[0],
        gas: "3000000",
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "3000000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "3000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");

    balance = parseFloat(balance);

    expect(balance > 103).toBe(true);
  });
});
