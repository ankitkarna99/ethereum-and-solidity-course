const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const compilation = require("../compile");

let accounts;
let lottery;

beforeEach(async () => {
  // Get a list of all accounts

  accounts = await web3.eth.getAccounts();

  // Use one of the accounts to deploy the contract
  lottery = await new web3.eth.Contract(compilation.abi)
    .deploy({
      data: compilation.evm.bytecode.object,
      arguments: [],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery Contract", () => {
  it("deploys a contract", () => {
    expect(lottery.options.address).toBeTruthy();
  });

  it("allows one account to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(".0002", "ether"),
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0],
    });

    expect(players[0]).toBe(accounts[0]);
    expect(players.length).toBe(1);
  });

  it("allows multiple account to enter", async () => {
    await Promise.all([
      lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(".0002", "ether"),
      }),
      lottery.methods.enter().send({
        from: accounts[1],
        value: web3.utils.toWei(".0002", "ether"),
      }),
      lottery.methods.enter().send({
        from: accounts[2],
        value: web3.utils.toWei(".0002", "ether"),
      }),
    ]);

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0],
    });

    expect(players).toEqual(accounts.slice(0, 3));
    expect(players.length).toBe(3);
  });

  it("requires a minimum amount of ether to enter", async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(".0001", "ether"),
      });

      expect(true).toBe(false);
    } catch (err) {}
  });

  it("only manager can call pick winner", async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1],
      });

      expect(true).toBe(false);
    } catch (err) {}
  });

  it("sends money to the winner and resets the players array", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(".0002", "ether"),
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    const finalBalance = await web3.eth.getBalance(accounts[0]);

    const difference = finalBalance - initialBalance;

    expect(difference > 0).toBe(true);
  });
});
