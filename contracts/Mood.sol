//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Mood {
    string currentMood;

    function setMood(string memory _newMood) external {
        currentMood = _newMood;
    }

    function getMood() external view returns( string memory){
        return currentMood;
    }
}