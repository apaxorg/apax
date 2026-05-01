import { ethers } from "hardhat";

async function main() {
  const Vault = await ethers.getContractFactory("PortfolioVault");
  const vault = await Vault.deploy();
  await vault.waitForDeployment();
  console.log("Vault deployed to:", await vault.getAddress());
}

main().catch(console.error);