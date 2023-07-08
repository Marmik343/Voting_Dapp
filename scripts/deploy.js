const hre = require("hardhat");

async function main() {

  const Voting = await hre.ethers.getContractFactory("Voting");

  const voting = await Voting.deploy(["Ronnie", "Cbum", "Arnold","Jo"], 90);

  await voting.waitForDeployment();

  console.log(`deployed to ${voting.target}`);
}
//0xB478BF30784c222D7D0EFDc8320FAcE801404F5F

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
