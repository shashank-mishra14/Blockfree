const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); //connect to local blockchain
  const wallet = new ethers.Wallet(
    "0x0123456789012345678901234567890123456789012345678901234567890123",
    provider
  ); //connect to wallet
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8"); //read abi
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  ); //read binary

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet); //create contract factory
  console.log("Hold on take a breath, Deploying contract...");
  const contract = await contractFactory.deploy(); //deploy contract, stop here and wait for contract to be deployed
  const deploymentReciept = await contract.deployTransaction.wait(1); //wait for transaction to be mined 
  console.log(deploymentReciept); //print transaction reciept
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
