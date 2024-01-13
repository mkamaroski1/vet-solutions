import Image from 'next/image';

const VetSolutions = '/images/vetsolutions.svg';

export const MainLogo = () => {
  return (
    <div className="text-center mt-6 md:mt-[17rem]">
      <div className="inline-block relative w-1/2 max-w-xs mx-auto md:w-auto md:max-w-none">
        <Image
          src={VetSolutions}
          alt="VetSolutions"
          layout="responsive"
          width={232} // Metade da largura original
          height={32} // Metade da altura original
        />
      </div>

      <h1 className="text-sm mx-4 md:text-2xl text-white mt-4 md:mx-0 md:w-[50rem]">
        Transforme os setores administrativos do seu negócio com o apoio do
        BackOffice da Vet Solutions. Organização e eficiência, tudo em um só
        lugar!
      </h1>
    </div>
  );
};
