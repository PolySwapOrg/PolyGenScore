import React from "react";
import "./DegenFactors.css";

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
                         return <div key={index} className="credit-container-2-1">
                          <span>{item.contract}</span>
                           <p>{item.occurrence} Interactions</p>
                         </div>;})}
      </div>
    </div>
  );
}

export default DegenFactors;
