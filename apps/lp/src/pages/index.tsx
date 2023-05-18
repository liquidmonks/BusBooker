import React from "react";
import {Layout, Seo} from "components";
import { HeroSection, MidSection } from "sections";
import { FaBeer} from "@react-icons/all-files/fa/FaBeer";

const sections = {
  features: {
    title: "Unleashing a New Era of Exploration",
    description: 
    "Unleash your wanderlust and embark on unforgettable journeys with our travel section, offering expertly curated destinations, insider tips, and personalized recommendations.",
    featuresTitle: "Why Travel With Us?",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Bus",
    features: [
  {
    title: "Expert Advice",
    description: "Our team of travel experts is here to inspire you and help you plan your next getaway. Whether you’re looking for a weekend trip or a month-long adventure, we’ve got you covered.",
    icon: FaBeer,
  }
    ]
  }
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" meta={undefined} children={undefined} />
    <HeroSection />
    <MidSection section={sections.features}/>
    </Layout>
    )

export default IndexPage;