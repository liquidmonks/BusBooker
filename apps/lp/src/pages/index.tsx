import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const headingString: string = "Welcome to Bus Booker";
const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} />
    <h1>{headingString}</h1>
  </Layout>
)

export default IndexPage;
