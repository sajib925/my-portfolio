import Link from 'next/link'
import React from 'react'
import StyledButton from './StyledButton';

const Button = ({href="", className, text}) => {
  return (
    <StyledButton>
      {href ? (
        <Link href={href} className={className}>
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