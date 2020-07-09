import React from "react";
import Card from "./Card";

import "../stylesheets/Home.css";

export default function Home() {
  const items = document.querySelectorAll(".slider-item");
  const itemCount = items.length;
  const nextItem = document.querySelector(".next");
  const previousItem = document.querySelector(".previous");
  const navItem = document.querySelector("a.toggle-nav");
  let count = 0;

  function showNextItem() {
    items[count].classList.remove("active");

    if (count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }

    items[count].classList.add("active");
    console.log(count);
  }

  function showPreviousItem() {
    items[count].classList.remove("active");

    if (count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }

    items[count].classList.add("active");
    // Check if working...
    console.log(count);
  }

  function toggleNavigation() {
    this.nextElementSibling.classList.toggle("active");
  }

  function keyPress(e) {
    e = e || window.event;

    if (e.keyCode == "37") {
      showPreviousItem();
    } else if (e.keyCode == "39") {
      showNextItem();
    }
  }

  // nextItem.addEventListener('click', showNextItem);
  // previousItem.addEventListener('click', showPreviousItem);
  document.addEventListener("keydown", keyPress);
  // navItem.addEventListener('click', toggleNavigation);
  return (
    // <div>
    <>
      <div className="intro-section">
        <div className="japan-container">
          <div className="grid">
            <div className="column-xs-12">
              <ul className="slider">
                <li className="slider-item active">
                  <div className="grid vertical">
                    <div className="column-xs-12 column-md-2 hide-mobile">
                      <div className="intro">
                        <a href="#">
                          <h1 className="title">
                            <span className="underline">Hi! Konnichiwa!</span>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="column-xs-12 column-md-10">
                      <div className="image-holder">
                        <img src="landing_page_img.jpg" />
                      </div>
                      <div className="grid">
                        <div className="column-xs-12 column-md-9">
                          <div className="intro show-mobile">
                            <a href="#">
                              <h1 className="title">
                                <span className="underline">Konnichiwa!</span>
                              </h1>
                            </a>
                          </div>
                          <p className="description">
                            See Nippon! is the site to go to when you want to
                            find information out about Japan!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="slider-item">
                  <div className="grid vertical">
                    <div className="column-xs-12 column-md-2 hide-mobile">
                      <div className="intro">
                        <a href="#">
                          <h1 className="title">
                            <span className="underline">Konnichiwa!</span>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="column-xs-12 column-md-10">
                      <div className="image-holder">
                        <img src="seenippon_fig3.jpg" />
                      </div>
                      <div className="grid">
                        <div className="column-xs-12 column-md-9">
                          <div className="intro show-mobile">
                            <a href="#">
                              <h1 className="title">
                                <span className="underline">Konnichiwa!</span>
                              </h1>
                            </a>
                          </div>
                          <p className="description">
                            Kyoto is famous for its numerous classical Buddhist
                            temples, gardens, imperial palaces, Shinto shrines
                            and traditional wooden houses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="slider-item">
                  <div className="grid vertical">
                    <div className="column-xs-12 column-md-2 hide-mobile">
                      <div className="intro">
                        <a href="#">
                          <h1 className="title">
                            <span className="underline">Explore Osaka</span>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="column-xs-12 column-md-10">
                      <div className="image-holder">
                        <img src="seenippon_fig4.jpg" />
                      </div>
                      <div className="grid">
                        <div className="column-xs-12 column-md-9">
                          <div className="intro show-mobile">
                            <a href="#">
                              <h1 className="title">
                                <span className="underline">Explore Osaka</span>
                              </h1>
                            </a>
                          </div>
                          <p className="description">
                            Osaka is a large port city and commercial center
                            known for its modern architecture, nightlife and
                            hearty street food.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="slider-item">
                  <div className="grid vertical">
                    <div className="column-xs-12 column-md-2 hide-mobile">
                      <div className="intro">
                        <a href="#">
                          <h1 className="title">
                            <span className="underline">Explore Hokkaido</span>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="column-xs-12 column-md-10">
                      <div className="image-holder">
                        <img src="seenippon_fig5.jpg" />
                      </div>
                      <div className="grid">
                        <div className="column-xs-12 column-md-9">
                          <div className="intro show-mobile">
                            <a href="#">
                              <h1 className="title">
                                <span className="underline">
                                  Explore Hokkaido
                                </span>
                              </h1>
                            </a>
                          </div>
                          <p className="description">
                            Hokkaido, the northernmost of Japan’s main islands,
                            is known for its volcanoes, natural hot springs
                            ("onsen") and ski areas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="grid">
                <div className="column-xs-12">
                  <div className="controls">
                    <button className="previous">
                      <i className="ion-ios-arrow-thin-left"></i>
                    </button>
                    <button className="next">
                      <i className="ion-ios-arrow-thin-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className = "container"> */}
        {/* <img src="landing_page_img.jpg" alt="landing_page_img" style={{width: '100vw', height: '65vw'}}/> */}
        {/* <div className="top-left">Blog title</div>
      </div>*/}
      </div>
      <Card />
    </>
  );
}
