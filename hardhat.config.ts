import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "hardhat-diamond-abi";
import "@nomiclabs/hardhat-ganache";
import "hardhat/types/config";
import "./tasks/test_contract";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            "0x2ccdb2db5e5a7f8931eb8f6d0a25a9f8f584564d82db8875c09dbca9f9c0efb0",
          balance: "100000000000000000000000000",
        },
      ],
      chainId: 2152,
      mining: {
        auto: true,
        interval: 3000,
      },
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567",
      ],
      chainId: 9527,
      timeout: 5000,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    spacing: 2,
  },
  diamondAbi: {
    name: "OutputAbi",
  },
  gasReporter: {
    enabled: true,
    showMethodSig: true,
    maxMethodDiff: 10,
    gasPrice: 127,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  typechain: {
    outDir: './build/types',
    target: 'ethers-v5',
  },     
};

export default config;
