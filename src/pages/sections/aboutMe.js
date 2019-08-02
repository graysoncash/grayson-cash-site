import React from "react"

import AboutMeBackgroundImg from "../../images/about_me_bkgrd.jpg"
import PortaitImg from "../../images/portrait_shot.jpg"

import aboutMeStrings from "../../../data/aboutMe.json"

export default class AboutMe extends React.Component {
  render() {
    const { props } = this
    return (
      <div
        id="about-me-section"
        className="colorlib-about"
        ref={props.reference}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div
                className="about-img"
                data-animate-effect="fadeInLeft"
                style={{ backgroundImage: `url(${AboutMeBackgroundImg})` }}
              >
                <div
                  className="portrait-img"
                  data-animate-effect="fadeInRight"
                  style={{ backgroundImage: `url(${PortaitImg})` }}
                />
              </div>
            </div>
            <div className="col-md-6" data-animate-effect="fadeInLeft">
              <div className="about-desc">
                <span className="heading-meta">About Me</span>
                <h3>{aboutMeStrings.headline}</h3>
                {aboutMeStrings.summary.map((s, i) => (
                  <React.Fragment key={`about-me-p-${i}`}>
                    <p>{s}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
