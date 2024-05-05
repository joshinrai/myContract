import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const MTT = await MyToken.deploy("My Token", "MTT", 1000000);

  console.log("MyToken address:", await MTT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
