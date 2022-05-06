//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// 0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82
contract Num2 {
    uint private num;
    // string private gm="ARbaz khan";

  function get() public view returns(uint256){
             return num;
  }
  function increment() public{
        num=num+1;
  }

//   function getValue() public view returns(string memory){
//           return gm;
//   }
}