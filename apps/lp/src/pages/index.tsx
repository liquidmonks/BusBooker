import React from "react";
import {Layout, Seo} from "components";
import { HeroSection, MidSection } from "sections";

const section = {
  title: "Unleashing a New Era of Exploration",
  description: "Unleash your wanderlust and embark on unforgettable journeys with our travel section, offering expertly curated destinations, insider tips, and personalized recommendations."
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" meta={undefined} children={undefined} />
    <HeroSection />
    <MidSection section={section}/>
    </Layout>
    )

export default IndexPage;