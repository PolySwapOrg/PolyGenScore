import React from 'react'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import SocialIcons from './SocialIcons';
import './Twitter.css';
import {TwitterShareButton} from "react-share";

const Twitter = (props) => {

    const [result, setResult] = React.useState(props.sum);
      const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
      setResult(result);
      setMessage(result+" is my #Defi #Polygen Score, Get yours @polyswap_labs ")
    }, [result]);

  return (
    <div className="date-image-container">
      <div className="container-1">
        <div className="container-2">
        <SocialIcons />
          <p>Share</p>
          <i className="fa fa-times"></i>
        </div>
        <div className="container-3">
          <p>Share your Polygen Score on twitter with your friends!</p>
        </div>
        <div className="container-4">
        <TwitterShareButton
        url="https://poly-gen-score.vercel.app/"
      title={message}>
      <p>Click to Share<i className="fa fa-chevron-right"></i></p>
    </TwitterShareButton>
          <img src="character.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Twitter;
