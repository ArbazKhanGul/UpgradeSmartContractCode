const hre = require("hardhat");
const {ethers,upgrades}=require("hardhat");

async function main() {
  
  const NUM2 = await hre.ethers.getContractFactory("Num2");
   console.log("Deploying version 2 num 1 upgrading");
await upgrades.upgradeProxy('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',NUM2);

  console.log("Upgraded .....");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
