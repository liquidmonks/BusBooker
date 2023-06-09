import React from 'react'
import tw from "tailwind-styled-components";
import { Section } from "components";

const Title = tw.span`text-5xl text-green-500 uppercase font-bold font-title`;
const Caption = tw.span`text-3xl text-gray-900 uppercase font-bold font-title`;
const Description = tw.h1`text-2xl text-gray-500`;
const MainImage = tw.img`rounded-3xl shadow-lg`;

const Separator = tw.div`w-10 h-1 bg-blue-500`

const Button = tw.button`bg-green-500 px-5 py-3 rounded-xl text-white font-bold uppercase`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero`
const BookingFormDummyDiv = tw.div`bg-white h-24 w-2/3 rounded-3xl shadow-xl`

const heroFeatures = [
    {
      title: "Book Easy",
      description: "Tickets with QR Code"
    },
    {
      title: "Discounts",
      description: "For those who create an account"
    },
    {
      title: "30+",
      description: "Cities around the U.S."
    }
  ]
  
  const HeroFeatureItem = ({ item }) => (
    <div>
      <h5 className="font-bold">{item.title}</h5>
      <p>{item.description}</p>
      </div>
  )
  
  const HeroFeatures = () => (
    <div className="flex gap-4">
  {heroFeatures.map((item) => (
    <HeroFeatureItem item={item} />
  ))}
    </div>
  )
  
  const LogoTitle = () => (
    <div>
      <div>
      <Caption>{"The Elite"}</Caption>
      <div className="flex mt-1">
        <Title className="text-blue-500">{"Bus"}</Title>
        <Title className="ml-3 text-green-500 ">{"Company"}</Title>
      </div>
      </div>
    <Separator className="mt-4" />
    </div>
  )
  
  const TextSection = () => (
    <div>
    <div className="space-y-6" >    
    <LogoTitle />
    <Description>
      {
        "Experience the ultimate in luxury and convenience on the open road with The Elite Bus Company's high-end fleet, state-of-the-art amenities, and commitment to safety."
      }
    </Description>
    <Button>{"Create Account"}</Button>
    </div>
    <div className="mt-32">
    <HeroFeatures />
    </div>
    </div>
  )
  
  const GradientBackground = () => (
   <div className="absolute top-0 left-0 right-0 h-[900px] z-0" >
    <Gradient />
   </div>
  )
  
  const BookingForm = () => (
    <div className="flex justify-center mt-16">
      <BookingFormDummyDiv />
    </div>
  )

export const HeroSection = () => (
    <>
    <GradientBackground />
    <Section className="h-[900px]">
      <BookingForm />
      <div className="flex items-center justify-between mt-16 gap-x-8">
   <TextSection />
    <div>
    <MainImage src="https://images.unsplash.com/photo-1570125909994-e06d01047c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="busses" />
  </div>
  </div>
  </Section>
  </>
)