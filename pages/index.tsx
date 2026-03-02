import Header from '../apps/components/Header';
import Hero from '../apps/components/Hero';
import Features from '../apps/components/Features';
import Pages from '../apps/components/Pages';
import Vision from '../apps/components/Vision';
import CTA from '../apps/components/CTA';
import Footer from '../apps/components/Footer';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <Pages />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
