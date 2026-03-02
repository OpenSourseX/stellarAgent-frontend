import Button from '../components/Button';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Stellar Agent Frontend</h1>
      <p className="mb-6">This is a Next.js application scaffolded manually.</p>
      <Button>Click me</Button>
    </main>
  );
};

export default Home;
