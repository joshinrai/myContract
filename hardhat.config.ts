import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const { ETH_SEPOILA_API_KEY, ACCOUNT_PRIVATE_KEY = "", ETHERSCAN_APIKEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${ETH_SEPOILA_API_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_APIKEY,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
