// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8; // version of solidity, if this show an error make sure you change your version in compiler

contract SimpleStorage {
    // just like the class in java

    //dataTypes : boolean, uint, int, address, bytes, string

    // mapping

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        // same as array 0 indexed
        uint256 favoriteNumber;
        string name;
    }

    People[] public people; // default is uint256

    uint256 favoriteNumber; // limit 8 - 256

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    //view  is  only
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    //calldata is temp var that can't be mod
    // memory is temp var that can be mod
    // storage is permanent var that can be mod

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
