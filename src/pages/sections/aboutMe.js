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
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Why choose me?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>Site in progress...</p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              Separated they live in Bookmarksgrove right at the
                              coast of the Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What I do?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        <p>
                          Far far away, behind the word{" "}
                          <strong>mountains</strong>, far from the countries
                          Vokalia and Consonantia, there live the blind texts.
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                        <ul>
                          <li>Separated they live in Bookmarksgrove right</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          My Specialties
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        <p>
                          Far far away, behind the word{" "}
                          <strong>mountains</strong>, far from the countries
                          Vokalia and Consonantia, there live the blind texts.
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
