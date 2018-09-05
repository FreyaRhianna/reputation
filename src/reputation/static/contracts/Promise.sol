pragma solidity ^0.4.21;

contract Promise {
    string public promise;
    string public promiser;
    string public promised;
    bool public fulfilled;
    bool public finalised;

    function Promise(string _promise, string _promiser, string _promised) public {
      promise = _promise;
      promiser = _promiser;
      promised = _promised;
      fulfilled = false;
      finalised = false;
    }

    function close(bool _fulfilled) {
      fulfilled = _fulfilled;
      finalised = true;
    }

    function brokenPromise() returns(bool){
      return (!fulfilled && finalised);
    }

    function getFinalised() returns(bool){
      return finalised;
    }
}
