import React from "react"
import PropTypes from "prop-types"

import ImgBg1 from "../../images/img_bg_1.jpg"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.activeTabHandler.bind(this)
  }

  activeTabHandler() {
    this.props.activeTabHandler("aboutMe")()
  }

  render() {
    return (
      <aside
        id="colorlib-hero"
        style={{ height: this.props.windowHeight }}
        ref={this.props.reference}
      >
        <div
          className="flexsliderr"
          style={{ height: this.props.windowHeight }}
        >
          <ul className="slides">
            <li style={{ backgroundImage: `url(${ImgBg1})` }}>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-md-8 col-md-offset-2 col-md-pull-2 slider-text"
                    style={{ height: this.props.windowHeight }}
                  >
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Grayson Cash</h1>
                        <h2>
                          Java {"&"} Python
                          <br />
                          Developer
                        </h2>
                        <p>
                          <button
                            className="btn btn-primary btn-learn"
                            onClick={this.activeTabHandler}
                          >
                            About Me <i className="icon-arrow-down3"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}

Home.propTypes = {
  reference: PropTypes.object,
  activeTabHandler: PropTypes.func.isRequired,
  windowHeight: PropTypes.string.isRequired,
}

export default Home
