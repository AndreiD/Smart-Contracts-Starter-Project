require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-web3")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-tracer")
require("@openzeppelin/hardhat-upgrades")
require("hardhat-docgen")
require("solidity-coverage")

module.exports = {
	solidity: {
		version: "0.8.11",
		settings: {
			optimizer: {
				enabled: true,
				runs: 800,
			},
		},
	},
	networks: {
		hardhat: {
			chainId: 127001,
			accounts: {
				mnemonic: "test test test test test test test test test test test junk",
			},
			blockGasLimit: 199022552,
			gas: 1500000,
			gasPrice: 100,
			allowUnlimitedContractSize: false,
			throwOnTransactionFailures: false,
			throwOnCallFailures: true,
			initialBaseFeePerGas: 0,
			accounts: {
				count: 35,
			},
		},
		ganache: {
			url: "http://127.0.0.1:7545",
			blockGasLimit: 10000000,
		},
		mainnet: {
			url: process.env.MAINNET_RPC,
			gas: 4500000,
			gasPrice: 56000000000, //56 gwei
			timeout: 99000,
			accounts: [process.env.PRIVATE_KEY],
		},
		rinkeby: {
			url: process.env.RINKEBY_RPC,
			network_id: 4,
			gas: 1500000,
			gasPrice: 10000000000, //10 gwei
			timeout: 15000,
			accounts: [process.env.PRIVATE_KEY],
		},
		polygon: {
			url: process.env.MATIC_RPC,
			network_id: 137,
			gas: 5500000,
			gasPrice: 30000000000, //30 gwei
			timeout: 25000,
			accounts: [process.env.PRIVATE_KEY],
		},
		polygon_test: {
			url: process.env.MATIC_RPC_TEST,
			network_id: 80001,
			gas: 2500000,
			gasPrice: 2000000000, //2 gwei
			timeout: 25000,
			accounts: [process.env.PRIVATE_KEY],
		},
		bsc_test: {
			url: process.env.BSC_RPC_TEST,
			network_id: 97,
			accounts: [process.env.PRIVATE_KEY],
		},
		bsc: {
			url: process.env.BSC_RPC,
			network_id: 56,
			accounts: [process.env.PRIVATE_KEY],
		},
		arbitrum_test: {
			url: process.env.ARBITRUM_TEST,
			network_id: 421611,
			gas: 2500000,
			gasPrice: 30000000, //0.03 gwei
			timeout: 25000,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	gasReporter: {
		enabled: !!process.env.REPORT_GAS === true,
		currency: "USD",
		gasPrice: 100,
		showTimeSpent: true,
		coinmarketcap: process.env.COINMARKETCAP_API,
	},
	docgen: {
		path: "./docs",
		clear: true,
		runOnCompile: true,
	},
	mocha: {
		timeout: 25000,
	},
	etherscan: {
		apiKey: process.env.ARBISCAN_KEY,
	},
}
