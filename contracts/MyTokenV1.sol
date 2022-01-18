// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyTokenV1 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
	function initialize() public initializer {
		__ERC20_init("MyTokenV6", "MTKV6");
		__Ownable_init();
		__UUPSUpgradeable_init();

		_mint(msg.sender, 10000 * 10**decimals());
	}

	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() initializer {}

	function _authorizeUpgrade(address) internal override onlyOwner {}

	function myFunction1() external pure returns (uint256) {
		return 1;
	}
}
