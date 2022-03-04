import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
const Blog = ({ data }) => {
  return (
    <Layout title={"Blog"} pageTitle={"My Blog Posts"}>
      <h1>Blog Page</h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const qeury = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
export default Blog;
