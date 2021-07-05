import React from 'react';
import Swap from "./swap.png";
import Defi from "./defi.png";
import Airdrop from "./airdrop.png";
import Farms from "./farms.png";
import Rekt from "./rekt.png";
import Lp from "./lp.png";
import './CompleteAnalytics.css';

function CompleteAnalytics(props) {
const [result, setResult] = React.useState(props.scores);
const items = [];
var styleRules = {};

React.useEffect(() => {
  setResult(result);
}, [result]);

for (const [index, value] of result.entries()) {
  if(value.type=="Farm")
   styleRules = {background: `url(${Farms})`};
   else if(value.type=="Swap"){
      styleRules = {background: `url(${Swap})`};}
   else if(value.type=="Liquidity provider"){
      styleRules = {background: `url(${Lp})`};
   }else if(value.type=="Lend/borrow"){
      styleRules = {background: `url(${Defi})`};
   }
    items.push(<div style={styleRules}  key={index} className="Analytics-container-bars"><
    p><span>Contract Interacted : </span>{value.contract}</p>
    <p> <span>Contract Website : </span> <a href={value.website} target="_blank" rel="noopener noreferrer">{value.website}</a></p>
    <p> <span> Score gained : </span> {value.score}</p>
    <p> <span> Type of Interaction : </span>{value.type}</p>
  </div>)
}
    return (
            <div className="Analytics-container">
                <div className="Analytics-container-head"><p>Complete Analytics</p></div>
                  {items}
                </div>
    )
}

export default CompleteAnalytics;
