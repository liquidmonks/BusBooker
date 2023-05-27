import React from "react";
import {Layout, Seo} from "components";
import { HeroSection, MidSection } from "sections";
import { GiSlashedShield } from "@react-icons/all-files/gi/GiSlashedShield";
import { GiAlarmClock } from "@react-icons/all-files/gi/GiAlarmClock";
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack";
import { BiNetworkChart } from "@react-icons/all-files/bi/BiNetworkChart";
import { FaLeaf } from "@react-icons/all-files/fa/FaLeaf";

const sections = {
  features: {
    title: "Unleashing a New Era of Exploration",
    description: 
    "Unleash your wanderlust and embark on unforgettable journeys with our travel section, offering expertly curated destinations, insider tips, and personalized recommendations.",
    featuresTitle: "Why Travel With Us?",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Bus",
    direction: "left",
    features: [
      {
        title: "Expert Advice",
        description: "Our team of travel experts is here to inspire you and help you plan your next getaway. Whether you’re looking for a weekend trip or a month-long adventure, we’ve got you covered.",
        icon: GiSlashedShield,
      },
      {
        title: "Seamless Travel Solutions: Simplifying Your Journey",
        description: "Experience a seamless travel experience with our advanced booking system, real-time updates, and exceptional customer service, ensuring a hassle-free journey from start to finish.",
        icon: GiAlarmClock,
      },
      {
        title: "Comfort Redefined: Luxury Travel at Its Finest",
        description: "Indulge in the epitome of comfort and luxury as you travel aboard our state-of-the-art buses, featuring spacious seating, premium amenities, and a first-class experience that exceeds expectations.",
        icon: GiMoneyStack,
      },
      {
        title: "Connected Travel: Embrace a Digital Journey",
        description: "Stay connected on the go with our onboard Wi-Fi, charging ports, and entertainment options, allowing you to work, relax, and stay entertained throughout your bus journey.",
        icon: GiMoneyStack,
      },
      {
        title: "Safety Above All: Your Trustworthy Travel Partner",
        description: "Rest easy knowing that your safety is our top priority, with rigorous safety protocols, experienced drivers, and well-maintained buses, ensuring a secure and reliable travel experience for all passengers.",
        icon: BiNetworkChart,
      },
      {
        title: "Efficiency Unleashed: Streamlined Bus Travel Solutions",
        description: "Streamline your travel plans with our efficient bus services, punctual departures, optimized routes, and dedicated staff, providing you with a smooth and time-saving travel experience.",
        icon: FaLeaf,
      },
    ],
  },
  features2: {
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
        icon: GiSlashedShield,
      },
      {
        title: "Seamless Travel Solutions: Simplifying Your Journey",
        description: "Experience a seamless travel experience with our advanced booking system, real-time updates, and exceptional customer service, ensuring a hassle-free journey from start to finish.",
        icon: GiAlarmClock,
      },
      {
        title: "Comfort Redefined: Luxury Travel at Its Finest",
        description: "Indulge in the epitome of comfort and luxury as you travel aboard our state-of-the-art buses, featuring spacious seating, premium amenities, and a first-class experience that exceeds expectations.",
        icon: GiMoneyStack,
      },
      {
        title: "Connected Travel: Embrace a Digital Journey",
        description: "Stay connected on the go with our onboard Wi-Fi, charging ports, and entertainment options, allowing you to work, relax, and stay entertained throughout your bus journey.",
        icon: GiMoneyStack,
      },
      {
        title: "Safety Above All: Your Trustworthy Travel Partner",
        description: "Rest easy knowing that your safety is our top priority, with rigorous safety protocols, experienced drivers, and well-maintained buses, ensuring a secure and reliable travel experience for all passengers.",
        icon: BiNetworkChart,
      },
      {
        title: "Efficiency Unleashed: Streamlined Bus Travel Solutions",
        description: "Streamline your travel plans with our efficient bus services, punctual departures, optimized routes, and dedicated staff, providing you with a smooth and time-saving travel experience.",
        icon: FaLeaf,
      },
    ],
  },
}



const IndexPage = () => (
  <Layout>
    <Seo title="Home" meta={undefined} children={undefined} />
    <HeroSection />
    <MidSection section={sections.features}/>
    <MidSection section={sections.features2}/>
    </Layout>
    )

export default IndexPage;