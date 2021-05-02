import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const AboutPage = () => (
  <div>
    <Seo title="About" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
