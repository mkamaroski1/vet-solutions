import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { aboutData } from "@/components/About-data";
import { ProfileForm } from "@/components/profileForm";
import { MainLogo } from "@/components/mainLogo";
import { AboutJob } from "@/components/aboutJob";
import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";
import { Video } from "@/components/video";

// TODO: Refactor this piece of shit 💩
const cardData = [
  {
    image: "aboutJobImages/Contador.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Contador",
  },
  {
    image: "aboutJobImages/recHumanos.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Recursos Humanos",
  },
  {
    image: "aboutJobImages/marketing.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Marketing",
  },
  {
    image: "aboutJobImages/analise.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Análise",
  },
];

const jobData = [
  {
    image: "/branding.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Branding",
  },
  {
    image: "/criacaoSites.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Criaçao de sites",
  },
  {
    image: "/aberturaEmpresas.svg",
    href: "https://wa.link/l0y3zd",
    altText: "Abertura de empresas",
  },
];

export default function Home() {
  return (
    <main className="relative bg-[url('/images/background.png')] flex-col justify-between">
      <Navbar />
      <div className="flex mx-[4rem] justify-around mt-[5rem]">
        <MainLogo />
        {/* <ProfileForm /> */}
      </div>
      <About />

      <Video />

      <h1 className="text-purple flex items-center justify-center mt-4 md:mt-[8rem] text-4xl md:text-6xl font-bold">
        O que oferecemos?
      </h1>

      <div className="flex flex-wrap justify-center mt-4 md:mt-8">
        {cardData.map((card) => (
          <AboutJob {...card} key={card.altText} />
        ))}
      </div>

      <h1 className="text-purple flex items-center justify-center mt-[10rem] text-4xl md:text-6xl font-bold">
        Serviços adicionais
      </h1>

      <div className="flex flex-wrap justify-center mt-4 md:mt-8">
        {jobData.map((card) => (
          <AboutJob {...card} key={card.altText} />
        ))}
      </div>

      <div className="bg-gradient-to-b from-orange-100 to-purple ">
        {/* <Footer /> */}
      </div>
    </main>
  );
}
