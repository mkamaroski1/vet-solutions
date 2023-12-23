import Link from "next/link";
import Image from "next/image";

type AboutJobProps = {
  image: string;
  href: string;
  altText: string;
};

export const AboutJob = ({ image, href, altText }: AboutJobProps) => {
  return (
    <div className="">
      <div className="flex-1  w-[23rem] h-[33rem] ml-[6rem]">
        <Link href={href}>
          <Image src={image} width={368} height={528} alt={altText} />
        </Link>
      </div>
    </div>
  );
};
