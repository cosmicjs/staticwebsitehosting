const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const singleSite = path.resolve(`./src/templates/single-site.js`)
  const singlePage = path.resolve(`./src/templates/single-page.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
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
  )

  // Create blog posts pages.
  const data = result.data.allMarkdownRemark.edges
  const sites = data.filter(({ node }) =>
    node.parent.dir.includes("content/sites")
  )

  sites.forEach((site, index) => {
    createPage({
      path: site.node.fields.slug,
      component: singleSite,
      context: {
        slug: site.node.fields.slug,
      },
    })
  })

  // Create pages
  const pages = data.filter(({ node }) =>
    node.parent.dir.includes("content/pages")
  )

  pages.forEach((page, index) => {
    createPage({
      path: page.node.fields.slug,
      component: singlePage,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
