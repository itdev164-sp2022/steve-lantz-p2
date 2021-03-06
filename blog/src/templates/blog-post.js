import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"
import App from "../components/app"




//Add space between elements
const Space = styled.div`
  display: flex;
  padding-top: 20px;
 

`


const BlogPostTemplate = ({ data}) => {
 const { title, body, video } = data.contentfulBlogPost
  

  
  
  return (
    <Layout title={title}>
      <Seo title={title} />

      <header>
        <h1 itemProp="headline">{title}</h1>

        <p>{data.contentfulBlogPost.frontmatter}</p>
      </header>

      <Space></Space>

      <div dangerouslySetInnerHTML={{ __html: video.video }}></div>

      <Space></Space>

      <section
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        itemProp="articleBody"
      />

     <App></App>

      <footer></footer>
    </Layout>
  )
}

export default BlogPostTemplate



export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    video {
      video
    }
    
  }
}

`