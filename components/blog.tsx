import { BlogData } from './blogData';

const blogCard = [
  {
    image: 'BlogImg/consultoriaDeRh.svg',
    title: 'Titulo da noticia',
    altText: 'noticia1',
  },
  {
    image: 'BlogImg/ConsultoriaEmpresarial.svg',
    title: 'Titulo da noticia',
    altText: 'noticia2',
  },
  {
    image: 'BlogImg/ConsultoriaEmpresarial2.svg',
    title: 'Titulo da noticia',
    altText: 'noticia3',
  },
];

export const Blog = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl mt-8 md:mt-[4rem] text-purple font-bold flex items-center justify-center">
          Blog
        </h1>
        <p className="text-lg md:text-2xl text-black text-center mt-4 md:mt-[2rem]">
          Nossos Posts e Notícias Recentes
        </p>
        <div className="flex flex-wrap justify-around pt-12 md:pt-24">
          {blogCard.map((data) => (
            <BlogData {...data} key={data.altText} />
          ))}
        </div>
      </div>
    </>
  );
};
