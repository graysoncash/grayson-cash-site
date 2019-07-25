import React from "react"

class ContactSection extends React.Component {
  state = {
    errors: {},
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  handleSubmit(event) {
    console.log(event)
  }

  render() {
    return (
      <div
        id="contact-section"
        className="colorlib-bg-color"
        ref={this.props.reference}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <span className="heading-meta">Contact Me</span>
              <h2
                className="colorlib-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                Drop a Line
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-lg-8">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <form
                    action="https://formspree.io/me@grayson.cash"
                    method="POST"
                  >
                    <div className="form-group">
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="email-address"
                        name="_replyto"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        valid={this.state.errors.email ? "false" : "true"}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="phone-number"
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id="message"
                        name="message"
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-send-message"
                        value="Send Message"
                        onSubmit={this.handleSubmit}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSection
