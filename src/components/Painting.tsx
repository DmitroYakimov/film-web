import Image from 'next/image';
import React from 'react';
import paintingImage from './your-image.jpg';

type Props = {
  onClick: () => void;
};

export default function Painting({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '66%',
        margin: 'auto',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s',
      }}
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        (e.currentTarget as HTMLDivElement).style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
      }}
    >
      <Image src={paintingImage} alt="Painting" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}