import { AiOutlineWhatsApp } from "react-icons/ai";

export const Info = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-[1rem] flex items-center justify-center">
        INFORMAÇÕES E <br /> ORÇAMENTOS
      </h1>
      <p className="text-md text-center mt-[1rem]">
        Preencha o formulario ou clique no link abaixo para entrar em contato
        com a nossa equipe
      </p>
    </div>
  );
};
const whatsAppNumber = "(41)12345-6789";

export const WhatsApp = () => {
  return (
    <>
      <div className="flex justify-center text-center gap-2 mb-[2rem] text-4xl">
        <AiOutlineWhatsApp size={42} />
        <p className="text-[24px]">Entre em contato no nosso WhatsApp</p>
      </div>
      <a
        href={`https://wa.me/${whatsAppNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl pb-[1rem] underline items-center justify-center flex"
      >
        {whatsAppNumber}
      </a>
    </>
  );
};
