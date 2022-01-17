// const { expect, assert } = require("chai")
// const { web3, ethers } = require("hardhat")
// const { BN, time, balance, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")
// const ether = require("@openzeppelin/test-helpers/src/ether")

// let adminsplitter, ogcats, erc20, erc721
// let owner, acc1, acc2

// describe("Admin Splitter Tests", function () {
// 	beforeEach(async function () {
// 		let TContract = await ethers.getContractFactory("OGCATS")
// 		ogcats = await TContract.deploy()
// 		await ogcats.deployed()

// 		let EContract = await ethers.getContractFactory("ERC20Mock")
// 		erc20 = await EContract.deploy()
// 		await erc20.deployed()

// 		TContract = await ethers.getContractFactory("ERC721Mock")
// 		erc721 = await TContract.deploy()
// 		await erc721.deployed()

// 		TContract = await ethers.getContractFactory("AdminSplitter")
// 		adminsplitter = await TContract.deploy(ogcats.address)
// 		await adminsplitter.deployed()

// 		signers = await ethers.getSigners()
// 		owner = signers[0]
// 		acc1 = signers[1]
// 		acc2 = signers[2]
// 	})

// 	it("simple test...", async function () {
// 		expect(await ogcats.totalSupply()).to.equal(0)
// 	})

// 	it("recovering erc20s", async function () {
// 		await ogcats.transferOwnership(adminsplitter.address)

// 		await erc20.transfer(ogcats.address, 10)

// 		await adminsplitter.reclaimERC20(erc20.address)

// 		expect(await erc20.balanceOf(adminsplitter.address)).to.equal(0)

// 		// expect(await erc20.balanceOf(adminsplitter.address)).to.equal(0)
// 	})

// 	// it("burning tokens works", async function () {
// 	// 	await expect(
// 	// 		nft.connect(acc1).publicBuy(3, { value: web3.utils.toWei("0.27", "ether") })
// 	// 	).to.emit(nft, "Transfer")
// 	// 	expect(await nft.balanceOf(acc1.address)).to.equal(3)
// 	// 	await nft.connect(acc1).burn(1)
// 	// 	expect(await nft.balanceOf(acc1.address)).to.equal(2)
// 	// })

// 	// // it("purchasing 3 tokens works", async function () {
// 	// // 	await nft.startSale()
// 	// // 	await expect(
// 	// // 		nft.connect(acc1).acquire(3, { value: web3.utils.toWei("0.21", "ether") })
// 	// // 	).to.emit(nft, "Transfer")
// 	// // })

// 	// // it("burning a token works", async function () {
// 	// // 	await nft.startSale()
// 	// // 	await expect(
// 	// // 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
// 	// // 	).to.emit(nft, "Transfer")

// 	// // 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

// 	// // 	await nft.connect(acc1).burn(1)
// 	// // 	expect(await nft.balanceOf(acc1.address)).to.equal(0)
// 	// // })

// 	// // it("can't burn other tokens than your own", async function () {
// 	// // 	await nft.startSale()
// 	// // 	await expect(
// 	// // 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
// 	// // 	).to.emit(nft, "Transfer")
// 	// // 	await expect(
// 	// // 		nft.connect(acc2).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
// 	// // 	).to.emit(nft, "Transfer")

// 	// // 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

// 	// // 	await expect(nft.connect(acc1).burn(2)).to.be.revertedWith(
// 	// // 		"revert caller is not owner nor approved"
// 	// // 	)
// 	// // })

// 	// // it("custom thing emits", async function () {
// 	// // 	await nft.startSale()
// 	// // 	await expect(
// 	// // 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
// 	// // 	).to.emit(nft, "Transfer")

// 	// // 	await expect(
// 	// // 		nft.connect(acc1).customThing(1, 100, "hello", { value: web3.utils.toWei("0.1", "ether") })
// 	// // 	).to.emit(nft, "CustomThing")
// 	// // })

// 	// // it("withdraw money works", async function () {
// 	// // 	const tracker = await balance.tracker(owner.address)
// 	// // 	let ownerInitialBalance = Number(await tracker.get("wei"))
// 	// // 	await nft.startSale()
// 	// // 	await expect(
// 	// // 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
// 	// // 	).to.emit(nft, "Transfer")

// 	// // 	await nft.withdrawEarnings()

// 	// // 	let ownerFinalBalance = Number(await tracker.get("wei"))
// 	// // 	expect(ownerFinalBalance - ownerInitialBalance).to.be.greaterThan(
// 	// // 		Number(web3.utils.toWei("0.06", "ether")) //some gas costs are lost
// 	// // 	)
// 	// // })

// 	// // it("should transfer accidentally sent ERC20 tokens to this contract", async function () {
// 	// // 	//deploy an erc20 token for
// 	// // 	let ERC20MockContract = await ethers.getContractFactory("ERC20Mock")
// 	// // 	erc20 = await ERC20MockContract.connect(acc1).deploy("ERCToken", "ERC", "10000")
// 	// // 	await erc20.deployed()

// 	// // 	// Transfer some tokens to this contract
// 	// // 	await erc20.connect(acc1).transfer(nft.address, 100)
// 	// // 	expect(await erc20.balanceOf(nft.address)).to.equal(100)

// 	// // 	// get them
// 	// // 	await nft.reclaimERC20(erc20.address)
// 	// // 	expect(await erc20.balanceOf(owner.address)).to.equal(100)
// 	// // })
// })
// const { expect } = require("chai")
// const { ethers } = require("hardhat")

// let cats, catgems, rewards
// let owner, acc1, acc2

// describe("Rewards Tests", function () {
// 	beforeEach(async function () {
// 		signers = await ethers.getSigners()
// 		owner = signers[0]
// 		acc1 = signers[1]
// 		acc2 = signers[2]

// 		let XXXX = await ethers.getContractFactory("XXXX")
// 		cats = await OGCATSC.deploy()
// 		await cats.deployed()

// 		let CGems = await ethers.getContractFactory("CatGems")
// 		catgems = await CGems.deploy()
// 		await catgems.deployed()

// 		let CRewards = await ethers.getContractFactory("CatGemsRewards")
// 		rewards = await CRewards.deploy()
// 		await rewards.deployed()

// 		await rewards.setAllowedNFTs(cats.address, "50000000000000000000")
// 		await rewards.setCatGemsToken(catgems.address)
// 		await catgems.setController(rewards.address, true)
// 	})

// 	it("simple staking test...", async function () {
// 		expect(await catgems.totalSupply()).to.equal(0)
// 	})

// 	it("staking a cat for 1 day gives you...", async function () {
// 		await cats.adminMint(1, owner.address)
// 		await expect(cats.balanceOf(owner.address) == 1)
// 		await rewards.claim(1, cats.address)
// 		let bal1 = await balanceERC20Token(owner.address)
// 		console.log("bal #1:>> ", bal1)

// 		await waitForDays(1)
// 		await rewards.claim(1, cats.address)
// 		let bal2 = await balanceERC20Token(owner.address)
// 		console.log("bal #2:>> ", bal2 - bal1)

// 		await waitForDays(1)
// 		await rewards.claim(1, cats.address)
// 		let bal3 = await balanceERC20Token(owner.address)
// 		console.log("bal #3:>> ", bal3 - bal2)
// 	})

// 	async function balanceERC20Token(address) {
// 		return Number(ethers.utils.formatEther(String(await catgems.balanceOf(address))))
// 	}

// 	async function waitForHours(h) {
// 		await ethers.provider.send("evm_increaseTime", [h * 3600])
// 		await ethers.provider.send("evm_mine")
// 	}
// 	async function waitForDays(days) {
// 		await ethers.provider.send("evm_increaseTime", [days * 86400])
// 		await ethers.provider.send("evm_mine")
// 	}
// })
// const { expect, assert } = require("chai")
// const { web3, ethers } = require("hardhat")
// const { BN, time, balance, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")
// const ether = require("@openzeppelin/test-helpers/src/ether")

// let ggang
// let owner, acc1, acc2, acc3

// describe("Goat Gang Tests", function () {
// 	beforeEach(async function () {
// 		let TContract = await ethers.getContractFactory("GoatGang")
// 		ggang = await TContract.deploy()
// 		await ggang.deployed()

// 		signers = await ethers.getSigners()
// 		owner = signers[0]
// 		acc1 = signers[1]
// 		acc2 = signers[2]
// 		acc3 = signers[3]
// 	})

// 	it("simple tests", async function () {
// 		console.log("owner = ", owner.address)
// 		console.log("acc1 = ", acc1.address)
// 		console.log("acc2 = ", acc2.address)
// 		console.log("acc3 = ", acc3.address)
// 		expect(await ggang.totalSupply()).to.equal(1) //admin mints one for opensea configuration
// 	})

// 	it("merke whitelist purchase works", async function () {
// 		await ggang.setMerkleRoot("0x946914d8ee59aefeb58bcf980ab1cdf0a87e4548a0ac67ead327badc9bb826c9")

// 		//acc1
// 		//0x70997970C51812dc3A010C7d01b50e0d17dc79C8
// 		//tokenId: 2 proof: 0x67c6a2e151d4352a55021b5d0028c18121cfc24c7d73b179d22b17daff069c6e,0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185,0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591
// 		await expect(
// 			ggang
// 				.connect(acc1)
// 				.genesisBuy(
// 					2,
// 					2,
// 					[
// 						"0x67c6a2e151d4352a55021b5d0028c18121cfc24c7d73b179d22b17daff069c6e",
// 						"0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185",
// 						"0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591",
// 					],
// 					{ value: web3.utils.toWei("0.4", "ether") }
// 				)
// 		).to.emit(ggang, "Transfer")
// 		//owner
// 		//0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// 		//tokenId: 1 proof: 0x274996539fafc4b0887fdcfbe1c73bc1147c223b1ebedc6e4e8462a80707d2c7,0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185,0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591
// 		await expect(
// 			ggang.genesisBuy(
// 				1,
// 				1,
// 				[
// 					"0x274996539fafc4b0887fdcfbe1c73bc1147c223b1ebedc6e4e8462a80707d2c7",
// 					"0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185",
// 					"0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591",
// 				],
// 				{ value: web3.utils.toWei("0.2", "ether") }
// 			)
// 		).to.emit(ggang, "Transfer")

// 		expect(await ggang.totalSupply()).to.equal(4)
// 	})

// 	it("simple purchase tokens works", async function () {
// 		await expect(
// 			ggang.connect(acc1).buy(1, {
// 				value: web3.utils.toWei("0.01", "ether"),
// 			})
// 		).to.emit(ggang, "Transfer")
// 		await expect(ggang.connect(acc2).buy(3, { value: web3.utils.toWei("0.03", "ether") })).to.emit(
// 			ggang,
// 			"Transfer"
// 		)
// 	})

// 	it("simple buy with referal works", async function () {
// 		await expect(
// 			ggang.connect(acc1).buyWithReferral(1, "0x90F79bf6EB2c4f870365E785982E1f101E93b906", {
// 				value: web3.utils.toWei("0.095", "ether"),
// 			})
// 		).to.emit(ggang, "Transfer")

// 		//get a genesis
// 		await expect(
// 			ggang
// 				.connect(acc1)
// 				.genesisBuy(
// 					2,
// 					2,
// 					[
// 						"0x67c6a2e151d4352a55021b5d0028c18121cfc24c7d73b179d22b17daff069c6e",
// 						"0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185",
// 						"0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591",
// 					],
// 					{ value: web3.utils.toWei("0.4", "ether") }
// 				)
// 		).to.emit(ggang, "Transfer")

// 		await expect(
// 			ggang
// 				.connect(acc2)
// 				.buyWithReferralGenesis(3, 1, { value: web3.utils.toWei("0.285", "ether") })
// 		).to.emit(ggang, "Transfer")
// 	})

// 	it("usual referal gets 0.001 eth per convincing...", async function () {
// 		const tracker = await balance.tracker(acc3.address)
// 		let acc3Balance = Number(await tracker.get("wei"))

// 		await expect(
// 			ggang.connect(acc1).buyWithReferral(1, "0x90F79bf6EB2c4f870365E785982E1f101E93b906", {
// 				value: web3.utils.toWei("0.095", "ether"),
// 			})
// 		).to.emit(ggang, "Transfer")

// 		await ggang.withdrawPayments(acc3.address)

// 		let acc3BalanceAfter = Number(await tracker.get("wei"))

// 		expect(Number(acc3BalanceAfter - acc3Balance)).to.be.greaterThan(
// 			Number(web3.utils.toWei("0.000999", "ether"))
// 		)
// 	})

// 	it("genesis referal gets 0.002 eth per convincing...", async function () {
// 		//get a genesis
// 		await ggang
// 			.connect(acc1)
// 			.genesisBuy(
// 				1,
// 				2,
// 				[
// 					"0x67c6a2e151d4352a55021b5d0028c18121cfc24c7d73b179d22b17daff069c6e",
// 					"0x24a65f736ebbcf9d4af6e6e1e281e4ff8f794a24ea36e8f95573e8b4d927e185",
// 					"0xf28512930a7aeab6f870d0275a51e4ab5d74cf9eb8eaf682d51eed3dedfaa591",
// 				],
// 				{ value: web3.utils.toWei("0.2", "ether") }
// 			)

// 		const tracker = await balance.tracker(acc1.address)
// 		let acc1Balance = Number(await tracker.get("wei"))

// 		//buy with genesis referral
// 		await expect(
// 			ggang.connect(acc3).buyWithReferralGenesis(1, 1, {
// 				value: web3.utils.toWei("0.095", "ether"),
// 			})
// 		).to.emit(ggang, "Transfer")

// 		await ggang.withdrawPayments(acc1.address)

// 		let acc1BalanceAfter = Number(await tracker.get("wei"))

// 		expect(Number(acc1BalanceAfter - acc1Balance)).to.be.greaterThan(
// 			Number(web3.utils.toWei("0.001999", "ether"))
// 		)
// 	})

// 	it("referals can query their balance...", async function () {
// 		await ggang.connect(acc1).buyWithReferral(3, "0x90F79bf6EB2c4f870365E785982E1f101E93b906", {
// 			value: web3.utils.toWei("0.285", "ether"),
// 		})
// 		let pendingBalance = Number(await ggang.payments(acc3.address))
// 		expect(Number(pendingBalance)).to.be.equal(Number(web3.utils.toWei("0.003", "ether")))
// 	})

	// it("burning tokens works", async function () {
	// 	await expect(
	// 		nft.connect(acc1).publicBuy(3, { value: web3.utils.toWei("0.27", "ether") })
	// 	).to.emit(nft, "Transfer")
	// 	expect(await nft.balanceOf(acc1.address)).to.equal(3)
	// 	await nft.connect(acc1).burn(1)
	// 	expect(await nft.balanceOf(acc1.address)).to.equal(2)
	// })

	// it("purchasing 3 tokens works", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(3, { value: web3.utils.toWei("0.21", "ether") })
	// 	).to.emit(nft, "Transfer")
	// })

	// it("burning a token works", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

	// 	await nft.connect(acc1).burn(1)
	// 	expect(await nft.balanceOf(acc1.address)).to.equal(0)
	// })

	// it("can't burn other tokens than your own", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")
	// 	await expect(
	// 		nft.connect(acc2).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	expect(await nft.balanceOf(acc1.address)).to.equal(1)

	// 	await expect(nft.connect(acc1).burn(2)).to.be.revertedWith(
	// 		"revert caller is not owner nor approved"
	// 	)
	// })

	// it("custom thing emits", async function () {
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	await expect(
	// 		nft.connect(acc1).customThing(1, 100, "hello", { value: web3.utils.toWei("0.1", "ether") })
	// 	).to.emit(nft, "CustomThing")
	// })

	// it("withdraw money works", async function () {
	// 	const tracker = await balance.tracker(owner.address)
	// 	let ownerInitialBalance = Number(await tracker.get("wei"))
	// 	await nft.startSale()
	// 	await expect(
	// 		nft.connect(acc1).acquire(1, { value: web3.utils.toWei("0.07", "ether") })
	// 	).to.emit(nft, "Transfer")

	// 	await nft.withdrawEarnings()

	// 	let ownerFinalBalance = Number(await tracker.get("wei"))
	// 	expect(ownerFinalBalance - ownerInitialBalance).to.be.greaterThan(
	// 		Number(web3.utils.toWei("0.06", "ether")) //some gas costs are lost
	// 	)
	// })

	// it("should transfer accidentally sent ERC20 tokens to this contract", async function () {
	// 	//deploy an erc20 token for
	// 	let ERC20MockContract = await ethers.getContractFactory("ERC20Mock")
	// 	erc20 = await ERC20MockContract.connect(acc1).deploy("ERCToken", "ERC", "10000")
	// 	await erc20.deployed()

	// 	// Transfer some tokens to this contract
	// 	await erc20.connect(acc1).transfer(nft.address, 100)
	// 	expect(await erc20.balanceOf(nft.address)).to.equal(100)

	// 	// get them
	// 	await nft.reclaimERC20(erc20.address)
	// 	expect(await erc20.balanceOf(owner.address)).to.equal(100)
	// })
})
