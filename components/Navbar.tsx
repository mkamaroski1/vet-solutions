import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-[100%] sticky top-0 z-50 px-24 justify-between items-center bg-gray-500 flex max-w-full h-[100px]">
      <h1>VetSolutions</h1>
      <div className="flex text-white gap-8 text-xs justify-center w-[1050px] items-center">
        <a>HOME</a>
        <a>SOBRE NÓS</a>
        <a>O QUE OFERECEMOS</a>
        <a>NOSSO DIFERENCAL</a>
        <a>PLANOS</a>
        <a>BLOG</a>
        <Button className="bg-purple font-bold underline rounded-full hover:bg-purple/75">
          Entre em contato
        </Button>
      </div>
    </header>
  );
}
