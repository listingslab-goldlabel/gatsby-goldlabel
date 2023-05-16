const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")

  const allBooks = await graphql(`
  query Books {
    allStrapiBook {
      edges {
        node {
          locale
          title
          description
          slug
          keywords
          bookimage {
            alternativeText
            width
            height
            url
          }
        }
      }
    }
  }
  `)
  const books = allBooks.data.allStrapiBook.edges
  
  if (books) {
    books.forEach(book => {
      // console.log("FFS", book.node.slug)
      const { slug } = book.node
      if (slug) {
        const path = `/book/${book.node.slug}`
        actions.createPage({
          path,
          component: PwaSeo,
          context: {
            data: {
              special: "book",
              locale: book.node.locale,
              path,
              book: book.node,
            },
          },
        })
      }
    })
  }

  createPage({
    path: "/",
    component: PwaSeo,
    context: {
      data: {
        special: "home",
        instructions: "Velcome, velcome",
      },
    },
  })

  createPage({
    path: `${"404"}`,
    component: PwaSeo,
    context: {
      data: {
        special: "404",
        instructions: "Route unavailable",
      },
    },
  })
  
}
