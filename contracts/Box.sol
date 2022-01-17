// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract Box {
	uint256 private value;

	event ValueChanged(uint256 newValue);

	// The onlyOwner modifier restricts who can call the store function
	function store(uint256 newValue) public {
		value = newValue;
		emit ValueChanged(newValue);
	}

	function retrieve() public view returns (uint256) {
		return value;
	}
}
