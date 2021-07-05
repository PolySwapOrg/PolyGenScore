import React from 'react';
import './CompleteAnalytics.css';

function CompleteAnalytics(props) {
const [result, setResult] = React.useState(props.scores);
const items = [];

React.useEffect(() => {
  setResult(result);
}, [result]);

for (const [index, value] of result.entries()) {
    items.push(<div  key={index} className="Analytics-container-bars"><
    p><span>Contract Interacted : </span>{value.contract}</p>
    <p> <span>Contract Website : </span> <a href={value.website} target="_blank" rel="noopener noreferrer">{value.website}</a></p>
    <p> <span> Score gained : </span> {value.score}</p>
    <p> <span> Type of Interaction : </span>{value.type}</p>


  </div>)
}
    return (
        <div>
            <div className="Analytics-container">
                <div className="Analytics-container-head"><p>Complete Analytics</p></div>
                  {items}
                </div>
        </div>
    )
}

export default CompleteAnalytics;
