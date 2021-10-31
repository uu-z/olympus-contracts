require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const TESTNET_URL = "https://babel-api.testnet.iotex.io";
const MAINNET_URL = "https://babel-api.mainnet.iotex.io";

module.exports = {
  solidity: "0.7.5",
  networks: {
    // hardhat: {
    //   allowUnlimitedContractSize: true,
    //   forking: {
    //     url: MAINNET_URL,
    //   },
    //   accounts: [
    //     { privateKey: process.env.PK, balance: "10000000000000000000" },
    //     { privateKey: process.env.MOCKDAO, balance: "10000000000000000000" },
    //   ],
    // },
    testnet: {
      url: TESTNET_URL,
      accounts: [process.env.PK, process.env.MOCKDAO],
      chainId: 4690,
    },
    mainnet: {
      url: MAINNET_URL,
      accounts: [process.env.PK, process.env.MOCKDAO],
      chainId: 4689,
    },
  },
};
