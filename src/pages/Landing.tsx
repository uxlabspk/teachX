import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

const Landing = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
};

export default Landing;
