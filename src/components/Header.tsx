import React from "react";
import images from '../data/images';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header
      className="font-roboto-condensed grid grid-cols-12 w-full h-auto bg-cover bg-no-repeat bg-top mt-0"
      style={{ backgroundImage: `url(${images.BannerHeader})` }}
    >
      <div className="flex justify-between w-full h-24 col-span-12 lg:h-32">
        <img className="w-80 h-20 object-contain" src={images.ArrowArtWhiteTop} alt="Arrow Art White Top" />
        <img className="h-20 lg:h-32" src={images.BorderRigOrange} alt="Border Rig Orange Top" />
      </div>
      <div className="flex justify-start items-center w-full col-span-12 h-64 lg:h-80">
        <span className="text-left w-80 lg:w-96 pl-12 lg:pl-24 text-3xl lg:text-5xl font-light uppercase text-text-color-01">
          {title}
        </span>
      </div>
      <div className="flex items-end w-full h-16 col-span-12 lg:h-20">
        <img className="h-16 lg:h-20" src={images.BorderDownLefBottom} alt="Border Down Left Bottom" />
      </div>
    </header>
  );
}
