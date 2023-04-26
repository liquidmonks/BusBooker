import React from "react";
import Seo from "../components/seo";
import tw from "tailwind-styled-components";
import {Layout} from "../components/layout";

const headingString: string = "Welcome to Bus Booker";

const Title = tw.h1`text-red-500 uppercase`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} />
    <Title>{headingString}</Title>
  </Layout>
);

export default IndexPage;
