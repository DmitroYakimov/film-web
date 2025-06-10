import React from 'react';
import { RopeStar } from './RopeStars';

const starImage = '/star.png';

export const FallingStars = () => {
  return (
    <>
      <RopeStar left="33%" delay={0.6} angle={0} height={240} starSrc={starImage} />
      <RopeStar left="35%" delay={0} angle={45} height={300} starSrc={starImage} />
      <RopeStar left="40%" delay={0.5} angle={30} height={180} starSrc={starImage} />
      <RopeStar left="43%" delay={0.4} angle={75} height={220} starSrc={starImage} />
      <RopeStar left="47%" delay={0.2} angle={60} height={260} starSrc={starImage} />
      <RopeStar left="55%" delay={0.7} angle={15} height={160} starSrc={starImage} />
      <RopeStar left="58%" delay={0.1} angle={90} height={200} starSrc={starImage} />
      <RopeStar left="62%" delay={0.3} angle={85} height={270} starSrc={starImage} />
    </>
  );
};