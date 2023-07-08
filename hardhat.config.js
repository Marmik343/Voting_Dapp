require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: ".env"});


const ALCHEMY_API_KEY = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
    networks:{
      sepolia:{
        url:ALCHEMY_API_KEY,
        accounts:[PRIVATE_KEY],
    },
  },
};