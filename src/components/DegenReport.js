import React from "react";
import "./DegenReport.css";
import ArcProgress from 'react-arc-progress';


function DegenReport(props) {
  const progress=.782;
   const text= (props.sum.toString());
  return (

    <div>
      <div className="credit-report-container">
        <h3>Polygen Score Report</h3>
        <ArcProgress className="arc"
       progress={progress}
       text={text}
       observer={(current) => {
         const { percentage, currentText } = current;
       }}
       animationEnd={({ progress, text }) => {
       }}
     />
      </div>
    </div>
  );
}

export default DegenReport;
