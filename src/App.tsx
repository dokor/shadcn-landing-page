import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import "./App.css";
import { Features } from "@/components/Features.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*<Sponsors />*/}
      <Newsletter />
      <HowItWorks />
      {/*<Features />*/}
      <Services />
      <Cta />
      {/*<Testimonials />*/}
      <About />
      <Features />
      {/*<Team />*/}
      {/*<Pricing />*/}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
