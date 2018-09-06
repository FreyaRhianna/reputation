from reputation import app, mongo, web3
from flask import render_template, session, request, redirect, url_for
from solc import compile_source
from web3.contract import ConciseContract
import flask_fs as fs
import os

@app.route('/post/registerPromise/', methods=['POST'])
def registerPromise():
    #compile an interface
    with open("./reputation/static/contracts/Promise.sol","r") as file:
        make_promise_contract = ''.join(line.rstrip() for line in file)

    compiledPromiseContract= compile_source(make_promise_contract)
    interface = compiledPromiseContract['<stdin>:Promise']
    print("got the contract")

    #get arguments
    request_dict = request.get_json()
    if (('promiseTerm' in request_dict) and ('promised' in request_dict)):
        promiseTerm = request_dict['promiseTerm']
        promised = request_dict['promised']
        promiser = session['email']
        #register the promise
        HelloWorld = web3.eth.contract(abi=interface['abi'],bytecode=interface['bin'])
        print("made a contract")
        tx_hash = HelloWorld.constructor(promiseTerm,promiser,promised).transact()
        print("made a constructor")
        tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
        print("Contract registered ")
        print(promised)
        return 'OK'
