pragma solidity ^0.4.21;

contract HelloWorld {
    string public message;

    function HelloWorld() public {
        message = 'Hello';
    }

    function setMessage(string _message) public {
        message = _message;
    }

    function greet() view public returns (string) {
        return message;
    }
}