const Web3 = require("web3");
const Web3WsProvider = require("web3-providers-ws");

// Initialize web3 using WebSocketProvider
const web3 = new Web3(new Web3WsProvider("ws://localhost:8545"));

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};
