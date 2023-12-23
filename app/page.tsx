import Navbar from '@/components/Navbar';
import About from '@/components/About';
import { aboutData } from '@/components/About-data';
import { ProfileForm } from '@/components/InfoForm';
import { MainLogo } from '@/components/mainLogo';
import { AboutJob } from '@/components/aboutJob';
import { AboutServices } from '@/components/aboutServices';
import { Differential } from '@/components/differential';

export default function Home() {
  return (
    <main className="flex bg-[url('/images/background.png')] min-h-screen flex-col relative justify-between">
      <div className="items-center">
        <Navbar />
      </div>
      <div className="flex align-middle justify-center mt-[5rem]">
        <MainLogo />
        <ProfileForm />
      </div>

      <About title={aboutData.title} />
      <AboutJob />
      <AboutServices />
      <Differential />
    </main>
  );
}
