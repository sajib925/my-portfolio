import Link from 'next/link'
import React from 'react'
import StyledButton from './StyledButton';

const Button = ({href="", to, className, text}) => {
  return (
    <StyledButton>
      {href ? (
        <Link href={to} className={className}>
          <span className='btn__text'>{text}</span>
        </Link>
      ) : (
        <button className={className}>
          <span className='btn__text'>{text}</span>
        </button>
      )}
    </StyledButton>
  );
}

export default Button