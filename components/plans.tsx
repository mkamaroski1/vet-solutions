import { PlansCard } from './plansCard';
import { CiCalendar } from 'react-icons/ci';

const dataPlans = [
  {
    icon: <CiCalendar size={80} color={`#70c7c7`} />,
    title: 'Plano Básico',
    valor: 'R$111,11',
    text: 'Tudo o que o plano oferece',
  },
  {
    icon: <CiCalendar size={80} color={`#70c7c7`} />,
    title: 'Plano Avançado',
    valor: 'R$111,11',
    text: 'Tudo o que o plano oferece',
  },
  {
    icon: <CiCalendar size={80} color={`#70c7c7`} />,
    title: 'Plano Diamond',
    valor: 'R$111,11',
    text: 'Tudo o que o plano oferece',
  },
];

export const Plans = () => {
  return (
    <>
      <div className="w-full md:w-[120rem] h-auto md:h-[66rem] bg-violet-400 p-4 md:p-0">
        <h1 className="text-3xl md:text-4xl mt-8 md:mt-[4rem] text-white font-bold flex items-center justify-center">
          Comece a Investir nos Seus Negócios
        </h1>
        <p className="text-white text-lg md:text-xl text-center mt-4 md:mt-[2rem]">
          Estamos prontos para ajudar no crescimento do seu empreendimento
          através dos nossos melhores planos mensais.
        </p>
        <div className="flex flex-wrap justify-around pt-12 md:pt-24">
          {dataPlans.map((data) => {
            return <PlansCard {...data} key={data.title} />;
          })}
        </div>
      </div>
    </>
  );
};
