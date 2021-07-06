import React from "react";
import "./DegenReport.css";
import ArcProgress from 'react-arc-progress';
import Confetti from 'react-confetti'


function DegenReport(props) {

  const [result, setResult] = React.useState(props.sum);

  React.useEffect(() => {
    setResult(result);
  }, [result]);

  return (
    <div>
      <div className="credit-report-container">
        <h3>Polygon Degen Score</h3><h6>Powered by PolySwap Labs</h6>
      <Confetti width="600px" height="300px"></Confetti>
      <p>{result}</p>
      </div>
    </div>
  );
}

export default DegenReport;
