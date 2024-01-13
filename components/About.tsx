import { ReactComponentElement, ReactNode } from 'react';

type AboutProps = {
  title: string;
};

const About = ({ title }: AboutProps) => {
  return (
    <>
       <div className="flex flex-col sm:flex-row">
        <div className="shadow-inherit mt-12 sm:mt-[24rem] w-11/12 sm:w-[73rem] h-auto sm:h-[44rem] bg-purple rounded-3xl mr-4 sm:mr-0">
          <div className="mt-4 sm:mt-[4rem] mx-4 sm:ml-[5rem] sm:w-[53rem] h-auto sm:h-[38rem]">
            <h1 className="text-sm font-bold text-white sm:text-3xl">{title}</h1>
            <p className="mt-12 text-white text-sm sm:text-lg">
              Na Vet Solutions, simplificamos a gestão do seu empreendimento,
              permitindo que você se concentre no que é fundamental. Nossos
              serviços abrangem contabilidade, recursos humanos, análise de
              dados e estratégias de publicidade, proporcionando eficiência
              operacional de uma maneira simples. Além disso, se você busca uma
              nova identidade, um site de alta qualidade ou deseja entrar no
              mercado com impacto, a Vet Solutions oferece serviços
              personalizados de branding, web design e suporte na abertura do
              seu negócio.
              <br />
              <br />
              A Vet Solutions conta com uma equipe qualificada, experiente e com
              alto nível de conhecimento para atender todas as demandas do
              mercado, oferecendo os melhores serviços para você e sua empresa.
              <br />
              <br />
              Nosso objetivo é elevar o seu negócio com a ajuda de especialistas
              no mercado pet, oferecendo serviços de forma qualificada e
              soluções essências para impulsionar o seu negócio.
              <br />
              <br />
              Converse com um de nossos especialistas, conheça mais sobre os
              nossos serviços e veja na prática o que podemos oferecer.
            </p>
          </div>
        </div>
        <div className="shadow-inherit w-full sm:w-[60rem] h-64 sm:h-[39rem] bg-black rounded-3xl mt-8 sm:mt-[34rem]"></div>
      </div>
    </>
  );
};

export default About;
