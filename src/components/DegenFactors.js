import React from "react";
import "./DegenFactors.css";
import { Popup } from 'semantic-ui-react';


function DegenFactors(props) {
  console.log(props);
  const [tcontarct, settcontarct] = React.useState(props.tcontract);
  const [fcontarct, setfcontarct] = React.useState(props.fcontract);
  React.useEffect(() => {
    settcontarct(tcontarct);
  }, [tcontarct]);

  React.useEffect(() => {
    setfcontarct(fcontarct);
  }, [fcontarct]);

const mint = (something) => {

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
          console.log(item);
                         return <div key={index} className="credit-container-2-1" onClick={mint(item)}>
                          <span>{item.contract}</span>
                           <p>{item.occurrence} Interactions</p>
                           <Popup
                                   content="Please comeback soon, We will launch some kickass NFTs to reward you!"
                                   header="Rewarding your Web3.0 Support!"
                                   trigger={<div className="div3"><span className="para"> {item.occurrence>=10?"You are Eligible, Click here to mint NFT!":""}</span></div>}
                                 />
                         </div>;})}
      </div>
    </div>
  );
}

export default DegenFactors;
