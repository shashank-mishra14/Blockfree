const ethers = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545"); //connect to local blockchain
  const wallet = new ethers.Wallet(
    "0x0123456789012345678901234567890123456789012345678901234567890123",
    provider
  ); //connect to wallet
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
