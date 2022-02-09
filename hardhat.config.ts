import '@nomiclabs/hardhat-ethers';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@typechain/hardhat';
// import "hardhat-gas-reporter";
// import "@nomiclabs/hardhat-etherscan";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
         version: '0.8.0',
      },
    ]
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ['local']
    },
    hardhat: {
      live: false,
      saveDeployments: true,
      tags: ['local', 'test'],
    }
    // hardhat: {
    //   live: false,
    //   saveDeployments: true,
    //   tags: ['local', 'test'],
    //   forking: {
    //     url: process.env.ALCHEMY_MAINNET_RPC_URL!,
    //     blockNumber: 13910565
    //   }
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  typechain: {
    outDir: "./typechain-types",
    target: 'ethers-v5',
    alwaysGenerateOverloads: true
  },

};
export default config;
