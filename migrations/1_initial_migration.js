const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, accout) {
  deployer.deploy(Migrations);
};
