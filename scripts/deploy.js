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
	const MyTokenV1 = await ethers.getContractFactory("MyTokenV1")
	console.log("Deploying Contract...")
	const instanceContract = await upgrades.deployProxy(MyTokenV1, {
		kind: "uups",
		log: true,
		skipIfAlreadyDeployed: true,
	})
	await instanceContract.deployed()

	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
	console.log("Contract Proxy:", instanceContract.address)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

	const contractImplementation = await getImplementationAddress(instanceContract.address)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
	console.log("Contract Implementation:", contractImplementation)
	console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

	const myContract = await hre.ethers.getContractAt("MyTokenV1", instanceContract.address)
	let _testFunction = Number(await myContract.myFunction1())
	console.log("_testFunction v1 :>> ", _testFunction)

	await sleep(20000)
	await hre.run("verify:verify", {
		address: contractImplementation,
		constructorArguments: [],
	})

	// NFT PROJECT ? need to set OpenSea gasless approvals ?
	// if (network === "rinkeby") {
	// 	await dep.setProxyRegistry("0xf57b2c51ded3a29e6891aba85459d600256cf317")
	// 	console.log("opensea proxy set.")
	// } else if (network === "mainnet") {
	// 	await dep.setProxyRegistry("0xa5409ec958c83c3f309868babaca7c86dcb077c1")
	// 	console.log("opensea proxy set.")
	// }
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
