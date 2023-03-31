import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
      },
      {
        version: "0.8.9",
        settings: {},
      },
      {
        version: "0.6.2",
      },
    ],
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    bnbTest: {
      url: process.env.BNBTest_URL,
      accounts: process.env.BNB_PRIVATE_KEY !== undefined
      ? [process.env.BNB_PRIVATE_KEY]
      : [],
    },
    bnb: {
      url: process.env.BNB_URL,
      accounts:
        process.env.BNB_PRIVATE_KEY !== undefined
          ? [process.env.BNB_PRIVATE_KEY]
          : [],
    },
  },
  mocha: {
    timeout: 200000,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
 
};

export default config;
