import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

const DoughnutChart = (props) => {
  const [result, setResult] = React.useState(props.scores);
  const [labellist, setLabelList] = React.useState([]);
    const [scorelist, setScoreList] = React.useState([]);
  const tdef={};

function sumData(tdata) {
tdata.forEach((item) => {
    tdef[item.type] = 0;
});
tdata.forEach((item) => {
    tdef[item.type]  =  tdef[item.type]+item.score;
});
setLabelList(Object.keys(tdef));
setScoreList(Object.values(tdef));

console.log("tdef", tdef);
}
  React.useEffect(() => {
    setResult(result);
    sumData(result);
  }, [result]);

   const data = {
    labels: labellist,
    datasets: [
      {
        label: "Credit Report Values",
        data: scorelist,
        backgroundColor: [
          ("rgb(245,76,107)"),
          ("rgb(255, 205, 86)"),
          ("rgb(87,218,97)"),
          ("rgb(91,67,241)"),
          ("rgb(255,116,36)"),
        ],
        hoverBorderWidth: 7,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    layout: {
      padding: 20,
    },
    plugins: {
      responsive: true,
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        textAlign: "center",
        labels: {
          usePointStyle: true,
          font: {
            size: 15,
          },
        },
      },

      title: {
        display: true,
        font: {
          size: 10,
        },
      },
    },
  };


  return (
    <div>
      <div className="DoughnutChart-container">
        <p id="head">Total Points Earned</p>
        <span id="total">
          {" "}
          <h4>Total: {props.sum}</h4>
        </span>
        <div className="DoughnutChart-container-1">
          <Doughnut type="polarArea" data={data} options={options} height={'130px'}/>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
