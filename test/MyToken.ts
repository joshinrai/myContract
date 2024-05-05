import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken", function () {
  const useMTT = async () => {
    const MyToken = await ethers.getContractFactory("MyToken");
    const MTT = await MyToken.deploy("My Token", "MTT", 1000000);

    return MTT;
  };

  it("Deployment", async function () {
    const [owner] = await ethers.getSigners();

    const MTT = await useMTT();

    expect(await MTT.totalSupply()).to.equal(1000000);
    expect(await MTT.balanceOf(owner)).to.equal(1000000);
  });

  it("Transfer", async function () {
    const [owner, address1] = await ethers.getSigners();

    const MTT = await useMTT();

    await MTT.transfer(address1, 400000);
    expect(await MTT.balanceOf(owner)).to.equal(600000);
    expect(await MTT.balanceOf(address1)).to.equal(400000);
  });

  it("Mint", async function () {
    const [owner] = await ethers.getSigners();

    const MTT = await useMTT();
    await MTT.mint(owner, 200000);
    expect(await MTT.totalSupply()).to.equal(1200000);
    expect(await MTT.balanceOf(owner)).to.equal(1200000);
  });

  it("Burn", async function () {
    const [owner] = await ethers.getSigners();

    const MTT = await useMTT();
    await MTT.burn(owner, 300000);
    expect(await MTT.totalSupply()).to.equal(700000);
    expect(await MTT.balanceOf(owner)).to.equal(700000);
  });
});
