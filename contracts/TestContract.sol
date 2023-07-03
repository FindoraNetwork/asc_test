//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TestContract {
    uint64 a = 10;

    function insert_test() public payable returns (uint64) {
        a++;
        return a;
    }

    function get_test() public view returns (uint64) {
        return a;
    }
}
