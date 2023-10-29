import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const logo = "/images/logo.png";
  const VetSolutions = "/images/vetsolutions.svg";
  return (
    <header className="w-[100%] sticky top-0 z-50 px-24 justify-between items-center bg-[#1E1E1E]/75 translucide flex max-w-full h-[100px]">
      <div className="flex gap-2">
        {" "}
        <Image width={48} height={60} src={logo} alt="logo" />
        <Image
          className="mt-0"
          width={200}
          height={80}
          src={VetSolutions}
          alt="logo"
        />
      </div>
      <div className="flex text-white gap-8 text-xs justify-center w-[1050px] items-center">
        <a>HOME</a>
        <a>SOBRE NÓS</a>
        <a>O QUE OFERECEMOS</a>
        <a>NOSSO DIFERENCAL</a>
        <a>PLANOS</a>
        <a>BLOG</a>
        <Button className="bg-purple text-mint font-bold underline rounded-full hover:bg-purple/75">
          Entre em contato
        </Button>
      </div>
    </header>
  );
}
