import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testimonials from "../components/Testimonial";
import Feedback from "../components/Feedback";

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
