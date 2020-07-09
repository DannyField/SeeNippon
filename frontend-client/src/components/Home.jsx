import React from "react";
import '../stylesheets/Home.css'

export default function Home() {
  return (
    <div>
      
      <div className = "container">
        {/* <img src="landing_page_img.jpg" alt="landing_page_img" style={{width: '100vw', height: '65vw'}}/> */}
          <div className="top-left">Blog title</div>
      </div>
      <div className="landing-page-text">
      <h1>Konnichiwa!</h1>
      <p>
        See Nippon! is the site to go to when you want to find information out
        about Japan!
      </p>
      </div>
    </div>
  );
}
