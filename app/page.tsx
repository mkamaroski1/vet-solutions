import Navbar from '@/components/Navbar';
import About from '@/components/About';
import { aboutData } from '@/components/About-data';

export default function Home() {
  return (
    <main className="flex bg-[url('/images/background.png')] min-h-screen flex-col relative justify-between">
      <div className="items-center">
        <Navbar />
      </div>
      <About title={aboutData.title} />
    </main>
  );
}
