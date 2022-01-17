const { ethers, upgrades } = require("hardhat")
require("@nomiclabs/hardhat-web3")
const fs = require("fs-extra")

async function main() {
	fs.removeSync("cache")
	fs.removeSync("artifacts")
	await run("compile")

	let network = process.env.NETWORK ? process.env.NETWORK : "rinkeby"

	console.log(">-> Network is set to " + network)

	// ethers is avaialble in the global scope
	const [deployer] = await ethers.getSigners()
	const deployerAddress = await deployer.getAddress()
	const account = await web3.utils.toChecksumAddress(deployerAddress)
	const balance = await web3.eth.getBalance(account)

	console.log(
		"Upgrader Account " + deployerAddress + " has balance: " + web3.utils.fromWei(balance, "ether"),
		"ETH"
	)

	// We get the contract to deploy
	const BOX_ADDRESS = "0xDD266b153B2E36ebB62758C59b327EED3Ad006E5"
	const BoxV2 = await ethers.getContractFactory("BoxV2")
	const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2)
	console.log("Box upgraded!")

	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
	console.log("Contract upgraded:", box.address)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
