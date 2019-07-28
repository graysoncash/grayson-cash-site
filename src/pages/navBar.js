import React from "react"
import PropTypes from "prop-types"

const tabNames = {
  ABOUT_ME: "aboutMe",
  CONTACT: "contact",
  EXPERIENCE: "experience",
  HOME: "home",
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.navBarButtonHandler = this.navBarButtonHandler.bind(this)
  }

  navBarButtonHandler = (reference, tabName) => event => {
    this.props.activeTabHandler(tabName)()
    reference.current.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <aside
        id="colorlib-aside"
        className="border"
        style={{ height: this.props.windowHeight }}
      >
        <h1 id="colorlib-logo">
          <a href="/">
            <span>G•</span>
            <span>•C</span>
          </a>
        </h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li
              className={
                this.props.activeTab === tabNames.HOME ? "colorlib-active" : ""
              }
            >
              <button
                className="navbar-button"
                onClick={this.navBarButtonHandler(
                  this.props.homeSection,
                  tabNames.HOME
                )}
              >
                Home
              </button>
            </li>
            <li
              className={
                this.props.activeTab === tabNames.ABOUT_ME
                  ? "colorlib-active"
                  : ""
              }
            >
              <button
                className="navbar-button"
                onClick={this.navBarButtonHandler(
                  this.props.aboutMeSection,
                  tabNames.ABOUT_ME
                )}
              >
                About Me
              </button>
            </li>
            <li
              className={
                this.props.activeTab === tabNames.EXPERIENCE
                  ? "colorlib-active"
                  : ""
              }
            >
              <button
                className="navbar-button"
                onClick={this.navBarButtonHandler(
                  this.props.experienceSection,
                  tabNames.EXPERIENCE
                )}
              >
                Experience
              </button>
            </li>
            <li
              className={
                this.props.activeTab === tabNames.CONTACT
                  ? "colorlib-active"
                  : ""
              }
            >
              <button
                className="navbar-button"
                onClick={this.navBarButtonHandler(
                  this.props.contactSection,
                  tabNames.CONTACT
                )}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/graysonlcash">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}

NavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  activeTabHandler: PropTypes.func.isRequired,
  homeSection: PropTypes.object.isRequired,
  aboutMeSection: PropTypes.object.isRequired,
  experienceSection: PropTypes.object.isRequired,
  contactSection: PropTypes.object.isRequired,
  windowHeight: PropTypes.string.isRequired,
}

export default NavBar
