//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Num1  is Initializable{
    uint private num;


 function update(uint256 _num) public initializer{
     num=_num;
   }

  function get() public view returns(uint256){
             return num;
  }

  function st() public pure returns(string memory){
      return "my name is arbaz khan";
  }
}