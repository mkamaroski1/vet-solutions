import Link from "next/link";
import Image from "next/image";

type AboutJobProps = {
  image: string;
  href: string;
  altText: string;
};

export const AboutJob = ({ image, href, altText }: AboutJobProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-full h-auto sm:h-[33rem] my-4 p-4">
        <Link href={href} passHref>
          <Image
            src={image}
            width={368}
            height={528}
            alt={altText}
            layout="responsive"
          />
        </Link>
      </div>
    </div>
  );
};
