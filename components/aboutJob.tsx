import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const contador = 'aboutJobImages/Contador.svg';
const recHumanos = 'aboutJobImages/recHumanos.svg';
const marketing = 'aboutJobImages/marketing.svg';
const analise = 'aboutJobImages/analise.svg';

export const AboutJob = () => {
  return (
    <div className="">
      <h1 className="text-purple flex items-center justify-center mt-[8rem] text-6xl font-bold underline">
        O QUE OFERECEMOS?
      </h1>
      <div className=" mt-[6rem] flex justify-between">
        <div className="flex-1  w-[23rem] h-[33rem] ml-[6rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={contador} alt="contador" className="" />
          </Link>
        </div>
        <div className="flex-1 w-[23rem] h-[33rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={recHumanos} alt="recHumanos" className="" />
          </Link>
        </div>
        <div className="flex-1 w-[23rem] h-[33rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={marketing} alt="marketing" className="" />
          </Link>
        </div>
        <div className="flex-1 w-[23rem] h-[33rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={analise} alt="analise" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
