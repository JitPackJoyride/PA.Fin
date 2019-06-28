pragma solidity ^0.4.25;

contract PersonalInformation {
  address public creator;
  string public userAddress;

  constructor(string initialAddress) public {
    creator = msg.sender;
    userAddress = initialAddress;
  }

  function setMessage(string newAddress) public {
    userAddress = newAddress;
  }
}