import React from 'react';
import { RopeStar } from './RopeStars';

const starImage = '/star.png';

export const FallingStars = () => {
  return (
    <>
      <RopeStar left="30%" delay={0} starSrc={starImage} />
      <RopeStar left="40%" delay={0.2} starSrc={starImage} />
      <RopeStar left="50%" delay={0.4} starSrc={starImage} />
      <RopeStar left="60%" delay={0.6} starSrc={starImage} />
      <RopeStar left="70%" delay={0.8} starSrc={starImage} />
    </>
  );
};