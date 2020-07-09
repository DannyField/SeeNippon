import React from "react";
import '../stylesheets/Home.css'

export default function Home() {
  return (
    // <div>
    <div class="intro-section">
      <div class="japan-container">
        <div class="grid">
          <div class="column-xs-12">
            <ul class="slider">
              <li class="slider-item active">
                <div class="grid vertical">
                  <div class="column-xs-12 column-md-2 hide-mobile">
                    <div class="intro">
                      <a href="#">
                        <h1 class="title"><span class="underline">Hi! Konnichiwa!</span></h1>
                      </a>
                    </div>
                  </div>
                  <div class="column-xs-12 column-md-10">
                    <div class="image-holder">
                      <img src="landing_page_img.jpg" />
                    </div>
                    <div class="grid">
                      <div class="column-xs-12 column-md-9">
                        <div class="intro show-mobile">
                          <a href="#">
                            <h1 class="title"><span class="underline">Konnichiwa!</span></h1>
                          </a>
                        </div>
                        <p class="description">See Nippon! is the site to go to when you want to find information out about Japan!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="slider-item">
                <div class="grid vertical">
                  <div class="column-xs-12 column-md-2 hide-mobile">
                    <div class="intro">
                      <a href="#">
                        <h1 class="title"><span class="underline">Konnichiwa!</span></h1>
                      </a>
                    </div>
                  </div>
                  <div class="column-xs-12 column-md-10">
                    <div class="image-holder">
                      <img src="https://source.unsplash.com/Pz3EHf-KJfc" />
                    </div>
                    <div class="grid">
                      <div class="column-xs-12 column-md-9">
                        <div class="intro show-mobile">
                          <a href="#">
                            <h1 class="title"><span class="underline">Konnichiwa!</span></h1>
                          </a>
                        </div>
                        <p class="description">Kyoto is famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="slider-item">
                <div class="grid vertical">
                  <div class="column-xs-12 column-md-2 hide-mobile">
                    <div class="intro">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Osaka</span></h1>
                      </a>
                    </div>
                  </div>
                  <div class="column-xs-12 column-md-10">
                    <div class="image-holder">
                      <img src="https://source.unsplash.com/peYW3VwICpE" />
                    </div>
                    <div class="grid">
                      <div class="column-xs-12 column-md-9">
                        <div class="intro show-mobile">
                          <a href="#">
                            <h1 class="title"><span class="underline">Explore Osaka</span></h1>
                          </a>
                        </div>
                        <p class="description">Osaka is a large port city and commercial center known for its modern architecture, nightlife and hearty street food.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="slider-item">
                <div class="grid vertical">
                  <div class="column-xs-12 column-md-2 hide-mobile">
                    <div class="intro">
                      <a href="#">
                        <h1 class="title"><span class="underline">Explore Hokkaido</span></h1>
                      </a>
                    </div>
                  </div>
                  <div class="column-xs-12 column-md-10">
                    <div class="image-holder">
                      <img src="https://source.unsplash.com/VmeOZQjTVGE" />
                    </div>
                    <div class="grid">
                      <div class="column-xs-12 column-md-9">
                        <div class="intro show-mobile">
                          <a href="#">
                            <h1 class="title"><span class="underline">Explore Hokkaido</span></h1>
                          </a>
                        </div>
                        <p class="description">Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes, natural hot springs ("onsen") and ski areas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="grid">
              <div class="column-xs-12">
                <div class="controls">
                  <button class="previous" />
                    <i class="ion-ios-arrow-thin-left"></i>
                  <button class="next" />
                    <i class="ion-ios-arrow-thin-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      
      {/* <div className = "container"> */}
        {/* <img src="landing_page_img.jpg" alt="landing_page_img" style={{width: '100vw', height: '65vw'}}/> */}
          {/* <div className="top-left">Blog title</div>
      </div>
      <div className="landing-page-text">
      <h1>Konnichiwa!</h1>
      <p>
        See Nippon! is the site to go to when you want to find information out
        about Japan!
      </p>
      </div> */}
    </div>
  );
}
