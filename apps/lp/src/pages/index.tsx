import React from "react";
import {Layout, Seo} from "../components";
import tw from "tailwind-styled-components";



const Title = tw.h1`text-5xl text-red-500 uppercase`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} />
    <Title>{ "The Elite Bus Co."}</Title>
    <img src="https://images.unsplash.com/photo-1597920467799-ec8bee99f6eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="busses" />
  </Layout>
);

export default IndexPage;
