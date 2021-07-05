import React from "react";
import "./DegenReport.css";
import ArcProgress from 'react-arc-progress';

function DegenReport(props) {
  console.log("heheh".props);

  const [result, setResult] = React.useState(props.sum);

  React.useEffect(() => {
    setResult(result);
  }, [result]);

  return (
    <div>
      <div className="credit-report-container">
        <h3>Polygon Degen Report</h3>
        <p>{result}</p>
        {/*<div className="prograssive-bar-container-1">
          <PrograssiveBar />
        </div>*/}
      </div>
    </div>
  );
}

export default DegenReport;
