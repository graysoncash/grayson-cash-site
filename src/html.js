import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Grayson Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />

        <link rel="shortcut icon" href="favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/flexslider.css" />
        <script src="js/modernizr-2.6.2.min.js" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="is-preload">
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}

        <script src="js/jquery.min.js"></script>
        {/* <script src="./js/jquery.easing.1.3.js"></script> */}
        {/* <script src="./js/bootstrap.min.js"></script> */}
        {/* <script src="./js/jquery.waypoints.min.js"></script> */}
        {/* <script src="./js/sticky-kit.min.js"></script> */}
        {/* <script src="js/main.js"></script> */}
        <script src="js/jquery.flexslider-min.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
