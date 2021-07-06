import React from "react";
import "./DegenFactors2.css";

function DegenFactors2(props) {
  console.log(props);
  const [tcontarct, settcontarct] = React.useState(props.tcontract);

  React.useEffect(() => {
    settcontarct(tcontarct);
    console.log("See this",tcontarct);
  }, [tcontarct]);

  return (
    <div className="degn-container">
      <div className="degn-container-1">
        <p>Total factors : <i className="fa fa-info-circle"></i>
        </p>
      </div>
      <div className="degn-container-2">
        {tcontarct&& tcontarct.sort((a,b) => b.occurrence - a.occurrence)
          .map(function(item, index){
                           return <div key={index} className="degn-container-2-1">
                            <span>{item.type}</span>
                             <p>{item.occurrence/2} Interactions</p>
                             <br/>
                           </div>;})}
      </div>
    </div>
  );
}

export default DegenFactors2;
