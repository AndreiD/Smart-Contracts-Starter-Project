// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyTokenV1.sol";

contract MyTokenV2 is MyTokenV1 {
	function myGetTotalSupply() external view returns (uint256) {
		return totalSupply();
	}

	function myFunction2() external pure returns (uint256) {
		return 2;
	}
}
