/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const VetSolutions = '/images/vetsolutions.svg';

export const MainLogo = () => {
  return (
    <div className=" w-[50rem] h-[18rem] mt-[31rem] space-y-8">
      <Image
        className="ml-[21rem] mt-[31rem]"
        width={464}
        height={64}
        src={VetSolutions}
        alt="vetSolutions"
      />

      <div>
        <h1 className="ml-[10rem] text-2xl text-white items-center w-[50rem]">
          Transforme os setores administrativos do seu negócio com o apoio do
          BackOffice da Vet Solutions. Organização e eficiência, tudo em um só
          lugar!
        </h1>
      </div>
    </div>
  );
};
