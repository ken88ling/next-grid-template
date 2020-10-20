import React from "react";
import "./layout1.scss";

export default function Home() {
  return (
    <div className="gr">
      <div className="gr__nav example">nav</div>
      <div className="gr__hero">hero</div>
      <div className="gr__main">
        <div className="gr__main__title">title</div>
        <div className="gr__main__article">article</div>
        <div className="gr__main__content">content</div>
      </div>
      <div className="gr__sidebar">sidebar</div>
      <div className="gr__footer">
        <div className="gr__footer__details">footer</div>
      </div>
    </div>
  );
}
