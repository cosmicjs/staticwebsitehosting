import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CosmicIcon from "../cosmic-icon.svg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const content = data.allMarkdownRemark.edges
  const sites = content.filter(({ node }) =>
    node.parent.dir.includes("content/sites")
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 row-gap-16">
        {sites.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const hasFreePlan = node.frontmatter.freeplan || false
          const hasAutoDeployment = node.frontmatter.autodeployment || false
          const cosmicAppLink = node.frontmatter.cosmicapplink || false
          return (
              <article
                className="overflow-hidden rounded shadow-lg flex flex-col bg-white"
                key={node.fields.slug}
              >
                <Link to={node.fields.slug} className="flex-1 shadow-none">
                  <div className="px-6 py-6">
                    <header>
                      <h3 className="font-bold text-2xl">
                          {title}
                      </h3>
                    </header>
                    <div className="mt-3">
                      {hasFreePlan && (
                        <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-2">
                          free plan
                        </span>
                      )}
                      {hasAutoDeployment && (
                        <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-2">
                          auto deployment
                        </span>
                      )}
                    </div>
                    <section className="mt-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </div>
                </Link>
                {cosmicAppLink && (
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
                )}
              </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [fields___slug], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            cosmicapplink
            freeplan
            autodeployment
          }
          parent {
            ... on File {
              dir
            }
          }
        }
      }
    }
  }
`
