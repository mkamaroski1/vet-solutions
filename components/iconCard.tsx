import { ReactElement } from 'react';
import { IconType } from 'react-icons';

type IconCardProps = {
  icon: ReactElement;
  title: string;
  text: string;
};

export const iconCard = ({ icon, title, text }: IconCardProps) => {
  return (
    <>
      <div className="w-[12rem] h-[12rem] bg-purple p-4 rounded-lg">{icon}</div>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};
