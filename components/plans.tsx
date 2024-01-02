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
      <div className="w-[120rem] h-[66rem] bg-violet-400 ">
        <h1 className="text-4xl mt-[4rem]  text-white font-bold flex items-center justify-center">
          comece a Investir nos Seus Negócios
        </h1>
        <p className="text-white text-xl text-center mt-[2rem] items-center- justify-center flex ">
          Estamos prontos para ajudar no crescimento do seu empreendimento
          através dos nossos melhores planos mensais.
        </p>
        <div className="justify-around pt-24 flex">
          {dataPlans.map((data) => {
            return <PlansCard {...data} key={data.title} />;
          })}
        </div>
      </div>
    </>
  );
};
