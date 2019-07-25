import React from "react"
import Helmet from "react-helmet"

import MainBody from "./mainBody"
import NavBar from "./navBar"

// sections
import HomeSection from "./sections/home"
import AboutMeSection from "./sections/aboutMe"
import ExperienceSection from "./sections/experience"
import ContactSection from "./sections/contact"

import "../sass/bootstrap.scss"
import "../sass/style.scss"

export default class App extends React.Component {
  state = {
    activeTab: "home",
    showNavBar: false,
    windowHeight: "0px",
  }

  constructor(props) {
    super(props)
    this.homeSection = React.createRef()
    this.aboutMeSection = React.createRef()
    this.experienceSection = React.createRef()
    this.contactSection = React.createRef()

    this.activeTabHandler = this.activeTabHandler.bind(this)
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    document.addEventListener("mousedown", this.handleClick, false)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
    document.removeEventListener("mousedown", this.handleClick, false)
  }

  showHideNavHandler = event => {
    this.setState({ showNavBar: !this.state.showNavBar })
  }

  handleClick = event => {
    if (this.mainBody.contains(event.target)) {
      this.setState({ showNavBar: false })
    }
  }

  updateDimensions() {
    this.setState({ windowHeight: `${window.innerHeight || 0}px` })
  }

  activeTabHandler = activeTab => () => {
    if (this[`${activeTab}Section`]) {
      this[`${activeTab}Section`].current.scrollIntoView({ behavior: "smooth" })
    }
    this.setState({ activeTab, showNavBar: false })
  }

  render() {
    const { showNavBar } = this.state

    return (
      <div id="colorlib-page">
        <Helmet>
          <body className={showNavBar && "offcanvas"} />
        </Helmet>

        <button
          onClick={this.showHideNavHandler}
          className={`js-colorlib-nav-toggle colorlib-nav-toggle ${showNavBar &&
            "active"}`}
        >
          <div />
        </button>
        <NavBar
          activeTab={this.state.activeTab}
          activeTabHandler={this.activeTabHandler}
          homeSection={this.homeSection}
          aboutMeSection={this.aboutMeSection}
          experienceSection={this.experienceSection}
          contactSection={this.contactSection}
          windowHeight={this.state.windowHeight}
        />
        <MainBody mainBodyRef={mainBody => (this.mainBody = mainBody)}>
          <HomeSection
            activeTabHandler={this.activeTabHandler}
            reference={this.homeSection}
            windowHeight={this.state.windowHeight}
          />
          <AboutMeSection reference={this.aboutMeSection} />
          <ExperienceSection reference={this.experienceSection} />
          <ContactSection reference={this.contactSection} />
        </MainBody>
      </div>
    )
  }
}
