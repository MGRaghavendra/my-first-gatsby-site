import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
const Blog = ({data}) => {
  return (
    <Layout title={"Blog"} pageTitle={"My Blog Posts"}>
      <h1>Blog Page</h1>
      {
          data.allFile.nodes.map(({name},index)=><li key={index}>{name}</li>)
      }
    </Layout>
  );
};

export const qeury = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
export default Blog;
