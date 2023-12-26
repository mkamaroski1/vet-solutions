import { ReactElement } from 'react';

type IconCardProps = {
  icon: ReactElement;
  title: string;
  text: string;
};

export const IconCard = ({ icon, title, text }: IconCardProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
      <div className="w-[12rem] h-[12rem] bg-purple p-4 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-center w-[12rem] h-[19] text-2xl text-white font-bold">
        {title}
      </h1>
      <p className="text-center w-[12rem] h-[19] text-sm text-white">{text}</p>
    </div>
  );
};
