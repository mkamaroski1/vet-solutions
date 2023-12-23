import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const branding = 'servicesImages/branding.svg';
const criacao = 'servicesImages/criacaoSites';
const abertura = 'servicesImages/AberturaEmpresas';

export const AboutServices = () => {
  return (
    <>
      <h1 className="text-purple flex items-center justify-center mt-[8rem] text-6xl font-bold underline">
        serviços adicionais
      </h1>
      <div className=" mt-[6rem] flex justify-between">
        <div className="flex-1 w-[23rem] h-[33rem] ml-[20rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={branding} alt="branding" className="" />
          </Link>
        </div>
        <div className="flex-1 w-[23rem] h-[33rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={criacao} alt="criacao" className="" />
          </Link>
        </div>
        <div className="flex-1 w-[23rem] h-[33rem]">
          <Link href="https://www.google.com.br/?hl=pt-BR">
            <img src={abertura} alt="abertura" className="" />
          </Link>
        </div>
      </div>
    </>
  );
};
