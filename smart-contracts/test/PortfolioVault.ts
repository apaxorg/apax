import { expect } from "chai";
import { ethers } from "hardhat";

describe("PortfolioVault", function () {
  it("accepts deposits and withdrawals", async () => {
    const [user] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory("PortfolioVault");
    const vault = await Vault.deploy();

    await vault.deposit({ value: ethers.parseEther("1") });
    expect(await vault.getBalance(user.address))
      .to.equal(ethers.parseEther("1"));

    await vault.withdraw(ethers.parseEther("0.5"));
    expect(await vault.getBalance(user.address))
      .to.equal(ethers.parseEther("0.5"));
  });
});