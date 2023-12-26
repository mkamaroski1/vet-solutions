import { CiCalendar } from 'react-icons/ci';
import {
  RiCustomerService2Fill,
  RiTeamFill,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import { IconCard } from './iconCard';
import { Fragment } from 'react';

const dataArray = [
  {
    icon: <RiCustomerService2Fill size={80} color={`#fff`} />,
    title: 'Atendimento personalizado',
    text: 'Oferecemos serviços personalizados, proporcionando um atendimento exclusivo, transparente e diferenciado. Ou seja, com a Vet Solutions você possui um canal aberto para todas as suas dúvidas.',
  },
  {
    icon: <CiCalendar size={80} color={`#fff`} />,
    title: 'Planos mensais',
    text: 'Através dos planos mensais personalizados, entregamos flexibilidade, uma vez que você pode escolher o plano que se ajuste melhor às suas possibilidades.',
  },
  {
    icon: <RiTeamFill size={80} color={`#fff`} />,
    title: 'Nosso time de profissionais',
    text: 'Os trabalhos serão executados pela equipe de profissionais da Vet Solutions, qualificados no mercado pet.',
  },
  {
    icon: <RiMoneyDollarCircleLine size={80} color={`#fff`} />,
    title: 'Preços competitivos',
    text: 'Nosso objetivo é ofertar preços competitivos, entregando serviços de qualidade a um preço justo.',
  },
];

export const Differential = () => {
  return (
    <Fragment>
      <h1 className="text-black flex items-center justify-center mt-[8rem] text-5xl font-bold underline">
        Diferenciais
      </h1>
      <p className="text-base text-center mt-[2rem] items-center- justify-center flex">
        Aqui é onde nós fazemos a diferença
      </p>

      <div className="bg-gray-700 w-[120rem] h-[48rem] mt-[2rem] pt-24 justify-around flex">
        {dataArray.map((data) => {
          return <IconCard {...data} key={data.title} />;
        })}
      </div>
    </Fragment>
  );
};
