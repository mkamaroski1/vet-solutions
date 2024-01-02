import Image from 'next/image';

type BlogDataProps = {
  image: string;
  title: string;
  altText: string;
};

export const BlogData = ({ image, title, altText }: BlogDataProps) => {
  return (
    <div className="grid grid-cols-1 w-[35rem] h-[31rem] rounded-xl items-center bg-stone-300">
      <Image src={image} width={560} height={325} alt={altText} />

      <h1 className="text-4xl font-bold text-black ml-7">{title}</h1>
      <button className="w-[12rem] h-[3rem] bg-indigo-600 text-lg text-white rounded-xl ml-7">
        Saiba mais
      </button>
    </div>
  );
};
