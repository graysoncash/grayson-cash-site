import React from "react"

import RiotLogo from "../../images/riotlogo.png"
import TbtLogo from "../../images/tbtlogo.png"
import NordstromLogo from "../../images/nordstromlogo.png"

import experienceContent from "../../../data/experience.json"

class ExperienceSection extends React.Component {
  render() {
    return (
      <div id="experience-section" ref={this.props.reference}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3">
              <span className="heading-meta">Professional Experience</span>
              <h2
                className="colorlib-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                Here is some of what I've worked on
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="colorlib-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i style={{ backgroundImage: `url(${RiotLogo})` }}></i>
                </div>
                <div className="colorlib-text experience-entry">
                  <h3>Riot Games</h3>
                  <h4>December 2017 - present</h4>
                  {experienceContent.riot.map((s, i) => (
                    <React.Fragment key={`experience-riot-p-${i}`}>
                      <p>- {s}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div
                className="colorlib-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i style={{ backgroundImage: `url(${TbtLogo})` }}></i>
                </div>
                <div className="colorlib-text experience-entry">
                  <h3>The Black Tux</h3>
                  <h4>February 2016 - December 2017</h4>
                  {experienceContent.theblacktux.map((s, i) => (
                    <React.Fragment key={`experience-tbt-p-${i}`}>
                      <p>- {s}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div
                className="colorlib-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i style={{ backgroundImage: `url(${NordstromLogo})` }}></i>
                </div>
                <div className="colorlib-text experience-entry">
                  <h3>Nordstrom</h3>
                  <h4>June 2014 - January 2016</h4>
                  <p>Site in progress...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceSection
