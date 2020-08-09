import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import CosmicIcon from "../cosmic-icon.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const site = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const homePage = site.frontmatter.homepage
  const twitter = site.frontmatter.twitter
  const pricingLink = site.frontmatter.pricing
  const cosmicAppLink = site.frontmatter.cosmicapplink

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={site.frontmatter.title}
        description={site.frontmatter.description || site.excerpt}
      />
      <article>
        <h2 className="text-3xl font-black mb-4">{site.frontmatter.title}</h2>
        <div className="inline-flex">
          <a
            href={homePage}
            target="_blank"
            rel="noreferrer"
            className="shadow-none mr-4 hover:text-green-600"
          >
            <FontAwesomeIcon icon={faHome} className="mr-1" />
            <span className="text-black">Home Page</span>
          </a>
          { 
            twitter &&
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
              className="shadow-none mr-4 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-1" />
              <span className="text-black">Twitter</span>
            </a>
          }
          <a
            href={pricingLink}
            target="_blank"
            rel="noreferrer"
            className="shadow-none mr-4 hover:text-purple-800"
          >
            <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
            <span className="text-black">Pricing</span>
          </a>
        </div>
        {cosmicAppLink && (
          <div className="flex mt-4">
            <a
              className="px-6 py-3 bg-blue-500 text-white shadow-none flex items-center justify-center hover:bg-blue-600"
              href={cosmicAppLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CosmicIcon}
                width="25"
                className="mr-2 m-0"
                alt="Cosmic Icon"
              />
              Deploy Cosmic Starter
            </a>
          </div>
        )}
        <section
          className="markdown mt-6"
          dangerouslySetInnerHTML={{ __html: site.html }}
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query SingleSiteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        homepage
        twitter
        cosmicapplink
        pricing
      }
    }
  }
`
