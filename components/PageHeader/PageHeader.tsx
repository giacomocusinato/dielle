import React from 'react';

export const PageHeader: React.FC<{ imgSrc: string, imgPosition?: number, title?: string }> = ({ imgSrc, imgPosition = 0, title }) => {
  return (
    <div className="relative overflow-hidden h-[340px]">
      <img src={imgSrc} className="absolute w-full h-full object-cover -z-10" style={{ objectPosition: `0 ${imgPosition}%` }} />
      <div className="absolute bg-dielle/80 inset-0 -z-10" />
      <div className="absolute w-0 h-0 bottom-0 border-b-[50px] border-r-[100vw] border-transparent border-b-white -z-10" />

      {title && <h1 className="text-5xl text-medium text-center mt-32 text-white drop-shadow">
        {title}
      </h1>}
    </div>

  );
}