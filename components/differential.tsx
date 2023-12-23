import { CiCalendar } from 'react-icons/ci';
import { iconCard } from './iconCard';
import { Fragment } from 'react';

const dataArray = [
  {
    icon: <CiCalendar />,
    title: 'teste',
    text: 'aaaaaaaaaaa',
  },
  { icon: <CiCalendar />, title: 'teste2', text: 'aaaaaaaaaaa' },
  { icon: <CiCalendar />, title: 'teste3', text: 'aaaaaaaaaaa' },
  { icon: <CiCalendar />, title: 'teste4', text: 'aaaaaaaaaaa' },
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
          return <iconCard {...data} key={data.title} />;
        })}
      </div>
    </Fragment>
  );
};
