import React from "react";
import {Layout, Seo} from "../components";
import tw from "tailwind-styled-components";

const Title = tw.h1`text-5xl text-green-500 uppercase`;
const Description = tw.h1`text-2xl text-gray-500`;
const MainImage = tw.img`rounded-3xl shadow-lg`;

const Section = tw.div`max-w-screen-2xl mx-auto relative`
const Separator = tw.div`w-10 h-1.5 bg-blue-500`

const Button = tw.button`bg-green-500 px-5 py-3 rounded-xl text-white font-bold uppercase`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero`

const TextSection = () => (
  <div className="space-y-6" >    
  <Title>{"The Elite Bus Co."}</Title>
  <Separator />
  <Description>
    {
      "Experience the ultimate in luxury and convenience on the open road with The Elite Bus Co.'s high-end fleet, state-of-the-art amenities, and commitment to safety."
    }
  </Description>
  <Button>{"Create Account"}</Button>
  </div>
)

const GradientBackground = () => (
  <div className="block">
 <div className="absolute top-0 left-0 right-0 h-[900px] z-0" >
  <Gradient />
 </div>
 </div>
)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description={undefined} children={undefined} meta={undefined} />
    <GradientBackground />
    <Section>
      <div className="flex items-center justify-between mt-16 gap-x-8">
   <TextSection />
    <div>
    <MainImage src="https://images.unsplash.com/photo-1570125909994-e06d01047c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="busses" />
  </div>
  </div>
  </Section>
  </Layout>
);

export default IndexPage;
