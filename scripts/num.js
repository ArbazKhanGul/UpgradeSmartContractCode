const hre = require("hardhat");
const {ethers,upgrades}=require("hardhat");
// 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
// 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
async function main() {
  
  const NUM1 = await hre.ethers.getContractFactory("Num1");
console.log("Deploying version 1");
const num1=await upgrades.deployProxy(NUM1,[10],{
  initializer:'update'
});

  await num1.deployed();

  console.log("Num deployed to:", num1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
