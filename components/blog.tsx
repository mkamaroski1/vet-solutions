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
        <h1 className="text-4xl mt-[4rem]  text-purple font-bold flex items-center justify-center">
          Blog
        </h1>
        <p className="text-black text-2xl text-center mt-[2rem] items-center- justify-center flex ">
          Nossos Posts e Noticias Recentes
        </p>
        <div className="justify-around pt-24 flex">
          {blogCard.map((data) => (
            <BlogData {...data} key={data.altText} />
          ))}
        </div>
      </div>
    </>
  );
};
