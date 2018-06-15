from reputation import app, mongo, web3
from flask import render_template, session, redirect, url_for
from solc import compile_source
from web3.contract import ConciseContract
import flask_fs as fs
import os 

'''import 'contracts/HelloWorld.sol' '''

with open("./reputation/static/contracts/HelloWorld.sol","r") as file:
    contract_test_code = ''.join(line.rstrip() for line in file)
    
compiled = compile_source(contract_test_code)
interface = compiled['<stdin>:HelloWorld']

@app.route('/')
def index():
    print("at hello world")
    if 'email' in session:
        print("you have in face been logged in")
        #return redirect(url_for("profile"))
        return render_template('userIndex.html')
        #return "you are logged in as " + session['email']
    else:
        return render_template('index.html')



#
@app.route('/sayHello')
def blockchainSendHello():
    HelloWorld = web3.eth.contract(abi=interface['abi'],bytecode=interface['bin'])
    tx_hash = HelloWorld.constructor().transact()
    tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
    helloWorld = web3.eth.contract(
        address=tx_receipt.contractAddress,
        abi = interface['abi'],
    )
    print(format(helloWorld.functions.greet().call()));
    return render_template('index.html')

