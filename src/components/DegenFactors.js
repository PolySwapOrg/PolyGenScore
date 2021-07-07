import React from "react";
import "./DegenFactors.css";
import Web3 from 'web3';

import {PolyGenNFTabi} from "../PolyGenNFTabi";
import { transitions, positions,Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const contractAddr = '0x0Cf4e2948ba0253754288efCD458d980aD7B299e';
const web3 = new Web3(Web3.givenProvider);
const SimpleContract = new web3.eth.Contract(PolyGenNFTabi, contractAddr);

function DegenFactors(props) {
  console.log(props);
  const [tcontarct, settcontarct] = React.useState(props.tcontract);
  const [fcontarct, setfcontarct] = React.useState(props.fcontract);
  const [name, setName] = React.useState();


  React.useEffect(() => {
    settcontarct(tcontarct);
  }, [tcontarct]);

  React.useEffect(() => {
    setfcontarct(fcontarct);
  }, [fcontarct]);

const mint = async(contractAddress) => {
  if(contractAddress ==="Quickswap")
  contractAddress = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff';
  else if(contractAddress ==="Dfyn" || contractAddress ==="Router protocol")
  contractAddress = '0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429';
  else if(contractAddress ==="Aave")
  contractAddress = '0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97';
  else if(contractAddress ==="DMM Kyber")
  contractAddress = '0x546C79662E028B661dFB4767664d0273184E4dD1';
  else if(contractAddress ==="Sushi" || contractAddress ==="Sushi Swap")
  contractAddress = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F';
  else if(contractAddress ==="Ape Swap")
  contractAddress = '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607';
  else if(contractAddress ==="Beefy Finance(WBTC/RenBTC)")
  contractAddress = '0x8c9d3Bc4425773BD2F00C4a2aC105c5Ad73c8141';
  else if(contractAddress ==="Unilend")
  contractAddress = '0x13A145D215182924c89F2aBc7D358DCc72F8F788';
  else if(contractAddress ==="Pickle(Dai Pool)")
  contractAddress = '0x0519848e57Ba0469AA5275283ec0712c91e20D8E';
  else {
    contractAddress = '0x0000000000000000000000000000000000000000';
  }
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const gas = await SimpleContract.methods.mint(account,contractAddress)
                      .estimateGas();
  const result = await SimpleContract.methods.mint(account,contractAddress).send({
    from: account,
    gas
  }).then((result) => {
   alert("New NFT is added into you Wallet, Go to PolygonScan!");
}).catch((err) => {
  console.log("Failed with error: " + err);
});
  }

  return (

    <div className="credit-container">
      <div className="credit-container-1">
        <p>Your Favourites : <i className="fa fa-info-circle"></i>
        </p>
      </div>
      <div className="credit-container-2">
      {fcontarct&& fcontarct.sort((a,b) => b.occurrence - a.occurrence).slice(0,10)
        .map(function(item, index){
                         return <div key={index} className="credit-container-2-1" >
                         <span>{item.contract}</span>
                           <p>{item.occurrence} Interactions</p>
                           <div onClick={() => mint(item.contract)}  className="div3"><span  className="para"> {item.occurrence>=10?"You are Eligible, Click here to mint NFT!":""}</span></div>
                           {/**<Popup
                                   content="Please comeback soon, We will launch some kickass NFTs to reward you!"
                                   header="Rewarding your Web3.0 Support!"
                                   trigger={<div className="div3"><span className="para"> {item.occurrence>=10?"You are Eligible, Click here to mint NFT!":""}</span></div>}
                                 **/}
                         </div>;})}
      </div>
    </div>
  );
}

export default DegenFactors;
