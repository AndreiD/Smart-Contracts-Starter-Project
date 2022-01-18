const { ethers, upgrades } = require("hardhat")
require("@nomiclabs/hardhat-web3")
const fs = require("fs-extra")

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

async function getImplementationAddress(proxyAddress) {
	const implHex = await ethers.provider.getStorageAt(
		proxyAddress,
		"0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
	)
	return ethers.utils.hexStripZeros(implHex)
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
	const proxyAddress = "0x4FE57a50Ee1A6079eD0e45123318127F3ca5Bd2a"
	const contract = await ethers.getContractFactory("MyTokenV2")
	console.log("Upgrading contract...")
	const upgr = await upgrades.upgradeProxy(proxyAddress, contract)
	await upgr.deployed()
	console.log("Contract upgraded @ ", upgr.address)

	const contractImplementation = await getImplementationAddress(upgr.address)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
	console.log("Contract Implementation:", contractImplementation)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

	//testing the upgrade
	const myContract = await hre.ethers.getContractAt("MyTokenV2", proxyAddress)
	let _testFunction = Number(await myContract.myFunction2())
	console.log("_testFunction v2 :>> ", _testFunction)

	await sleep(20000)
	await hre.run("verify:verify", {
		address: contractImplementation,
		constructorArguments: [],
	})
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
