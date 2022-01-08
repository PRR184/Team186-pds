const PDS = artifacts.require("PDS");

module.exports = async function(deployer){
    const quantityOfBag=50;
    await deployer.deploy(PDS,quantityOfBag);
    const instance = await PDS.deployed();
    console.log(instance);
};