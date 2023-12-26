import { ReactElement } from 'react';

type PlansCardProps = {
  icon: ReactElement;
  title: string;
  valor: string;
  text: string;
};

export const PlansCard = ({ icon, title, valor, text }: PlansCardProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-5  w-[25rem] h-[50rem] bg-gray-800 rounded-xl items-center">
      <div className="flex items-center justify-center w-[7rem] h-[7rem] bg-purple p-4 rounded-full ml-[9rem]">
        {icon}
      </div>
      <h1 className=" text-center text-2xl text-white font-bold">{title}</h1>
      <h2 className="text-7xl text-white text-center">{valor}</h2>
      <p className="text-white text-center text-xl">{text}</p>
      <button className="border border-white w-[15rem] h-[4rem] items-center justify-center ml-[5.2rem]">
        CONHEÇA JÁ!
      </button>
    </div>
  );
};
