const db = require("../models");
//const Volunteers = db.volunteers;

const MetaMaskSDK = require('@metamask/sdk');

// Create and Save a new Volunteer
exports.create = (req, res) => {  
  console.log("test3")
  console.log(req)

};

exports.findAll = (req, res) => {

  console.log("test1")
};

exports.get = (req, res) => {
  console.log("test3")
  const sdk = new MetaMaskSDK({
    shouldShimWeb3: false,
    showQRCode: true,
  });
  const ethereum = sdk.getProvider();
  //console.log(req)
};



