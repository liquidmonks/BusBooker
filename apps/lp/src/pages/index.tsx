import React from "react";
import {Layout, Seo} from "../components";
import tw from "tailwind-styled-components";


const headingString: string = "Welcome to Bus Booker";

const Title = tw.h1`text-red-500 uppercase`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} />
    <Title>{headingString}</Title>
  </Layout>
);

export default IndexPage;
