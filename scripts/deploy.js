// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
async function main() {
  const GammaNFT = await ethers.getContractFactory("GammaNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const gammaNFT = await GammaNFT.deploy();
  console.log("Contract deployed to address:", gammaNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //0x3FCa20DADd18aeB53f809B2b8F77E407De49073d