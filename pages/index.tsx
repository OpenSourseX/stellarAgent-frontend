import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pages from '../components/Pages';
import Vision from '../components/Vision';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
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
