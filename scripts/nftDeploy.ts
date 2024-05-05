const hre = require("hardhat");

async function main() {
  const MyNft = await hre.ethers.getContractFactory("MyNft");
  const myNft = await MyNft.deploy();

  await myNft.deployed("My Test Nft", "MTN", 1000000);

  console.log("NFT_OCEAN deployed to:", myNft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });