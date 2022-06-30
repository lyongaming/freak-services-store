import React from 'react'
import { SquaresBackground } from '../SquaresBackground';

export const PageBackground = ({ children }) => {
  return (
    <>
        { children }
        <SquaresBackground />
    </>
  );
}
