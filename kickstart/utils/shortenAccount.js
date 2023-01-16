const shortenAccount = (account) => {
  return account.slice(0, 4) + "..." + account.slice(-4);
};

export default shortenAccount;
