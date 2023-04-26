# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function _mutability_ and _visibility_ to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24.

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to `project-6` folder and install all requisite npm packages (as listed in `package.json`):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder `build\contracts`.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

- [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
- [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
  to make the web faster, safer, and more open.
- [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

- Solidity
- Ganache-cli
- Truffle
- IPFS

## Choice of Tech Stack

Truffle:
Truffle is a popular development framework for Ethereum that simplifies the process of writing, testing, and deploying smart contracts. It provides an environment to compile, deploy, and interact with your smart contracts using JavaScript. Truffle also integrates with popular testing frameworks like Mocha and Chai, making it easier to write comprehensive tests for your smart contracts. In my project, Truffle was used to streamline the development and testing of your smart contracts.

Web3:
Web3.js is a JavaScript library that allows you to interact with the Ethereum blockchain from a web application. It provides an interface to send transactions, query contract state, and interact with Ethereum nodes. In my project, Web3.js was used to establish a connection between my web application and the Ethereum blockchain, enabling you to send transactions, call smart contract functions, and query the blockchain state.

IPFS:
The InterPlanetary File System (IPFS) is a distributed file system that enables decentralized storage and sharing of data. It uses a content-addressed, peer-to-peer method of storing and sharing data, making it more resilient to failures and censorship compared to traditional centralized systems. In my project, IPFS was used to store and serve the web application files in a decentralized manner, ensuring that your application remains accessible even if a single server goes down or gets blocked.

Ganache-cli:
Ganache-cli is a command-line version of Ganache, a local Ethereum blockchain implementation for development and testing purposes. It provides a customizable, personal blockchain that runs entirely in-memory, allowing developers to quickly deploy and test smart contracts without the overhead of a real Ethereum network. Ganache-cli comes with built-in features such as instantly mining transactions, deterministic addresses, and easy access to account private keys. In my project, Ganache-cli was used to create a local Ethereum environment for testing and developing your smart contracts, enabling faster iteration and a controlled environment for experimentation.

## IPFS Deployment

I have deployed the front end code using IPFS by creating a "deploy" folder that stores copies of the src folder (containing app.js) and the index.html and style.css files.

commands:
cd deploy
ipfs add -r .
ipfs pin add <CID>

Content Identifier (CID): QmXNZFuQ2hfKkTo5zYwJcRYMkPmYFBbmAzMvCh393NL7TE
Full Location: https://ipfs.io/ipfs/QmXNZFuQ2hfKkTo5zYwJcRYMkPmYFBbmAzMvCh393NL7TE/

## Contract Addresses

Sepolia Network

Contract Addresses

- Migrations.sol: 0xd01fBE1CB8f255Ff6d9DB74C1b8BF3aA6175309E
- FarmerRole.sol: 0x040c9e7a1a116Bd196D6fC3D3C6D74A2C11e3281
- DistributorRole.sol: 0x30Af7E136B35CA98c3bF00D8D985a11D1BF82461
- RetailerRole.sol: 0x7A5CdAE3EA0254D0f45a735479c32085cE4809fd
- ConsumerRole.sol: 0x7A511C5f3e12A60bbc13BF44E58C37B4fAe6846E
- SupplyChain.sol: 0x324EA83502C14542F1C1d232197DC082C6A58e97 (transaction hash: 0xaebf21dd8e5a63745c10262c08fa677678b4364785f45f7daeae491a6a7590fe)
