import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import PlatformModal from '@/components/PlatformModal';
import Hero from '@/sections/Hero';
import FeatureHighlights from '@/sections/FeatureHighlights';
import ProblemSolution from '@/sections/ProblemSolution';
import About from '@/sections/About';
import Product from '@/sections/Product';
import Features from '@/sections/Features';
import ProctoredMocks from '@/sections/ProctoredMocks';
import Technology from '@/sections/Technology';
import Contact from '@/sections/Contact';

export default function App() {
  const [platformOpen, setPlatformOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLaunch={() => setPlatformOpen(true)} />
      <MobileNav onLaunch={() => setPlatformOpen(true)} />

      <main>
        <Hero onLaunch={() => setPlatformOpen(true)} />
        <FeatureHighlights />
        <ProblemSolution />
        <Product />
        <Features />
        <ProctoredMocks />
        <About />
        <Technology />
        <Contact />
      </main>

      <Footer />
      <PlatformModal open={platformOpen} onClose={() => setPlatformOpen(false)} />
    </div>
  );
}
