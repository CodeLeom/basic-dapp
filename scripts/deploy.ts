import { ethers } from "hardhat";

async function main() {
  const Mood = await ethers.getContractFactory("Mood"); //the parameter inside the getContractFactory must be the name of the contract
  const mood = await Mood.deploy();

  await mood.deployed();

  console.log(`Mood contract has been deployed to ${mood.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
