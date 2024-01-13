import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Info = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold flex items-center justify-center">
        INFORMAÇÕES E <br /> ORÇAMENTOS
      </h1>
      <p className="text-sm mt-[1rem]">
        Preencha o formulario ou clique no link abaixo para entrar em contato
        com a nossa equipe
      </p>
    </div>
  );
};
const numberWhatsApp = '(41)12345-6789';

export const WhatsApp = () => {
  return (
    <>
      <div className="text-4xl items-stretch ">
        <AiOutlineWhatsApp className="w-[4rem] h-[4rem]" />
        <p>Entre em contato no nosso WhatsApp</p>
      </div>
      <a
        href={`https://wa.me/${numberWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl items-center justify-center flex"
      >
        (41)12345-6789
      </a>
    </>
  );
};
