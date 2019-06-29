pragma solidity ^0.4.25;

contract PersonalInformation {
  address public creator;
  string public userAddress;
  uint[] private randomArray;

  constructor(string initialAddress) public {
    creator = msg.sender;
    userAddress = initialAddress;
  }

  function getRandomArray() public view returns (uint[]) {
    return randomArray;
  }

  function setMessage(string newAddress) public {
    userAddress = newAddress;
  }
}