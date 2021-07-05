import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './SocialIcons.css';

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://twitter.com/Polyswap_labs" target="_blank" rel="noopener noreferrer" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
