const { ethers, upgrades } = require("hardhat")
require("@nomiclabs/hardhat-web3")
const fs = require("fs-extra")

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

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
		"Deployer Account " + deployerAddress + " has balance: " + web3.utils.fromWei(balance, "ether"),
		"ETH"
	)

	// We get the contract to deploy
	const NFTContract = await ethers.getContractFactory("Box")
	console.log("Deploying Contract...")
	const deployed = await upgrades.deployProxy(NFTContract)

	let dep = await deployed.deployed()
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
	console.log("Contract deployed to:", dep.address)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

	await sleep(60000)
	await hre.run("verify:verify", {
		address: dep.address,
		constructorArguments: [],
	})

	if (network === "rinkeby") {
		await dep.setProxyRegistry("0xf57b2c51ded3a29e6891aba85459d600256cf317")
		console.log("opensea proxy set.")
	} else if (network === "mainnet") {
		await dep.setProxyRegistry("0xa5409ec958c83c3f309868babaca7c86dcb077c1")
		console.log("opensea proxy set.")
	} else {
		console.log("opensea proxy cannot be set.")
	}
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
