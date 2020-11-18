import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ConstructionImage from "../images/undraw_under_construction_46pa.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="body">
      <img src={ConstructionImage} alt="under Construction" />
      <h4>Website Under Construction</h4>
      <h2>You can view my work at <Link to="https://www.github.com/vishnuramv/">Github</Link> and Contact me at <Link to="https://www.linkedin.com/in/vishnu1902/" >LinkedIn</Link> or <Link to="https://www.instagram.com/vvishnu___/">Instagram</Link></h2>
    </div>
  </Layout>
)

export default IndexPage
