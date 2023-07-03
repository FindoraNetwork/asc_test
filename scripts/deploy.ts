import { ethers } from "hardhat";

async function main() {
  try {
    const TestContract = await ethers.getContractFactory("TestContract");
    const testContract = await TestContract.deploy();
    await testContract.deployed();

    console.log("TestContract with deployed to ", testContract.address);
  } catch (err) {
    console.log("error: ", err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
