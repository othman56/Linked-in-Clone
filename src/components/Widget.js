import { Info } from "@mui/icons-material";
import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import "./Widget.css";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget-header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("Coronavirus", "UK updates - 896 readers")}
      {newsArticle("Tesla hits new gighs", "cars & autos - 360 readers")}
      {newsArticle("Bitcoins breaks $22k", "crypto - 8000 readers")}
      {newsArticle("Is redux too good", "code - 123 readers")}
      {newsArticle("PAPA React launches course?!", "Top News - 6856 readers")}
    </div>
  );
}

export default Widget;
