import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Header from "../components/header"
import PostCard from "../components/postCard"

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.edges
  return (
  <div>
    <Seo title="Home" />
    <Header />
    <div className="post-feed">
      {posts.map(({ node }) => (
        <PostCard key={node.id} post={node} />
      ))}
    </div>
    <p>
      <Link to="/about/">Go to page 2</Link> <br />
    </p>

  </div>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query IndexQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          id
          slug
          title
          published_at
        }
      }
    }
  }
`