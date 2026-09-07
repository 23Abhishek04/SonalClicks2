import dynamic from "next/dynamic";
import Hero from "../components/Hero";

const Services = dynamic(() => import("../components/Services"));
const About = dynamic(() => import("../components/About"));
const Portfolio = dynamic(() => import("../components/Portfolio"));
const Feedback = dynamic(() => import("../components/Feedback"));
const Testimonials = dynamic(() => import("../components/Testimonial"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Feedback />
      <Testimonials />
    </main>
  );
}