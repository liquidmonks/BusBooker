import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import tw from "tailwind-styled-components";

import Layout from "../components/layout";
import Seo from "../components/seo";

const headingString: string = "Welcome to Bus Booker";

// Use PascalCase for component names and change 'title' to 'Title'
const Title = tw.h1`text-red-500 uppercase`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} />
    <Title>{headingString}</Title>
  </Layout>
);

export default IndexPage;
